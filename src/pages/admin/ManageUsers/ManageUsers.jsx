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
    Upload,
} from "antd";
import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { getAllUser, postCreateNewUser } from "../../../services/apiServices";
import { toast } from "react-toastify";
import uploadFile from "../../../utils/upload";

function ManageUsers({ roleFilter, showAddButton = true }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [form] = useForm();
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        form.resetFields();
        setFileList([]);
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
                    {/* <Button
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
                    </Button> */}

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

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => {
        const updatedFileList = newFileList.map((file) => {
            if (file.status === "uploading") {
                return { ...file };
            }
            if (file.response && file.response.status === "ok") {
                return { ...file, status: "done" }; // Thành công
            }

            if (file.status === "error") {
                return { ...file, status: "done" };
            }
            return file;
        });
        setFileList(updatedFileList);
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: "none",
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const fetchDataUser = async () => {
        const response = await getAllUser();
        console.log(response.data);
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
        console.log("Delete User: ", id);
        await axios.delete(
            `https://662b5a5cde35f91de157f14d.mockapi.io/pets/${id}`
        );
        const listAfterDelete = dataSource.filter((user) => user.id !== id);
        setDataSource(listAfterDelete);
    };

    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };

    const handleSaveUser = async (values) => {
        setLoading(true);
        try {
            if (values.id) {
                await axios.put(
                    `https://662b5a5cde35f91de157f14d.mockapi.io/pets/${values.id}`,
                    values
                );
            } else {
                const url = await uploadFile(values.avatar.file.originFileObj);
                values.avatar = url;
                await postCreateNewUser(values);
            }

            setLoading(false);
            toast.success("Successfully created new user");
            fetchDataUser();
            form.resetFields();
            setFileList([]);
            handleCloseModal();
        } catch (error) {
            toast.error("Error creating user");
        }
    };

    return (
        <div className="manage__user">
            <h1 className="manage__user-title">
                {" "}
                {roleFilter ? `Manage ${roleFilter}s` : "Manage Users"}
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
                // onOk={handleOk}
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
                    <Form.Item name="id" hidden>
                        <Input />
                    </Form.Item>
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
                        <Input disabled={!!form.getFieldValue("id")} />
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
                        <Input.Password disabled={!!form.getFieldValue("id")} />
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
                        <Input />
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
                                    value: "Mentor",
                                    label: "Mentor",
                                },
                                {
                                    value: "Student",
                                    label: "Student",
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Avatar" name="avatar">
                        <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: "none",
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                            !visible && setPreviewImage(""),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
}

export default ManageUsers;
