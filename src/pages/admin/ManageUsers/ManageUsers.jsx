import {
    Button,
    Form,
    Image,
    Input,
    Modal,
    Popconfirm,
    Select,
    Table,
    Tag,
} from "antd";
import { useEffect, useState } from "react";
import "./index.scss";
import { useForm } from "antd/es/form/Form";
import {  PlusSquareOutlined } from "@ant-design/icons";
import {
    deleteUser,
    getAllUser,
    postCreateNewUser,
} from "../../../services/apiServices";
import { toast } from "react-toastify";

function ManageUsers({ roleFilter, showAddButton = true }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("STUDENT");

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        form.resetFields();
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            render: (role) => (
                <Tag color={role === "MENTOR" ? "blue" : "green"}>{role}</Tag>
            ),
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            render: (avatar) => (
                <Image
                    src={avatar}
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                />
            ),
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id, user) => (
                <div>
                    {/* Nút Update */}
                    <Button
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#b5ed3d",
                            color: "#032e32",
                        }}
                        type="primary"
                        onClick={() => {
                            setIsOpen(true);
                            form.setFieldsValue(user);
                        }}
                    >
                        Update
                    </Button>

                    {/* Nút Delete */}
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDelete(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const fetchDataUser = async () => {
        const response = await getAllUser();
        let data = response.data;

        if (roleFilter) {
            data = data.filter((user) => user.role === roleFilter);
        }
        setDataSource(data);
    };

    useEffect(() => {
        fetchDataUser();
    }, [roleFilter]);

    const handleOk = () => {
        form.submit();
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteUser(id);

            console.log("response: ", response);
            if (response?.code === 202) {
                toast.success(response.message);
                const updatedList = dataSource.filter((user) => user.id !== id);
                setDataSource(updatedList);
            } else {
                toast.error("Failed to delete the user.");
            }
        } catch (error) {
            console.error("Error deleting user: ", error);
            toast.error("Error deleting user");
        }
    };

    const handleSaveUser = async () => {
        setLoading(true);

        try {
            const response = await postCreateNewUser(
                email,
                password,
                name,
                role
            );
            console.log("response:", response);
            setLoading(false);
            if (response && response.code === 201) {
                toast.success("Create account successfully!!!");
            }
            fetchDataUser();
            form.resetFields();
            handleCloseModal();
        } catch (error) {
            toast.error("Error creating user");
        }
    };

    return (
        <div className="manage__user">
            <h1 className="manage__user-title">
                {roleFilter ? `Manage ${roleFilter}S` : "Manage Users"}
            </h1>
            {showAddButton && (
                <button onClick={handleOpenModal} className="btn add__user-btn">
                    <PlusSquareOutlined
                        style={{ marginRight: "8px", fontSize: "17px" }}
                    />
                    Add New User
                </button>
            )}
            <Table
                dataSource={dataSource}
                columns={columns}
                style={{ marginTop: "10px" }}
            />
            <Modal
                title="Add New User"
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="back" onClick={handleCloseModal}>
                        Cancel
                    </Button>,
                    <Button
                        type="primary"
                        onClick={handleOk}
                        loading={loading}
                        key=""
                        style={{ backgroundColor: "#b5ed3d", color: "#032e32" }}
                    >
                        Create
                    </Button>,
                ]}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    form={form}
                    onFinish={handleSaveUser}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input
                            disabled={!!form.getFieldValue("id")}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password
                            disabled={!!form.getFieldValue("id")}
                            value={password}
                            onChange={(event) =>
                                setPassWord(event.target.value)
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a role"
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: "MENTOR",
                                    label: "MENTOR",
                                },
                                {
                                    value: "STUDENT",
                                    label: "STUDENT",
                                },
                            ]}
                            value={role}
                            onChange={(value) => setRole(value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default ManageUsers;
