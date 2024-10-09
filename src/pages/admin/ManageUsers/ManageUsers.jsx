import {
    Button,
    Form,
    Image,
    Input,
    Modal,
    Popconfirm,
    Select,
    Table,
    Upload,
} from "antd";
import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";

function ManageUsers() {
    const [isOpen, setIsOpen] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [form] = useForm();
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
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
        },
        {
            title: "Poster",
            dataIndex: "poster_path",
            key: "poster_path",
            render: (poster_path) => <Image src={poster_path} width={200} />,
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id) => (
                <div>
                    {/* Nút Update */}
                    <Button
                        style={{ marginRight: "10px" }} // Tạo khoảng cách 10px giữa Update và Delete
                        type="primary"
                    >
                        Update
                    </Button>

                    {/* Nút Delete */}
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        // onConfirm={() => handleDelete(id)}
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

    const handleChange = ({ fileList: newFileList }) =>
        setFileList(newFileList);

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
        const response = await axios.get(
            "https://662b5a5cde35f91de157f14d.mockapi.io/pets"
        );
        setDataSource(response.data);
    };

    useEffect(() => {
        fetchDataUser();
    }, []);

    const handleOk = () => {
        form.submit();
    };

    return (
        <div className="manage__user">
            <h1 className="manage__user-title">Manage User</h1>
            <button onClick={handleOpenModal} className="btn add__user-btn">
                Add New User
            </button>
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
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    form={form}
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
                        <Input />
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
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="Name"
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
                                    value: "1",
                                    label: "Mentor",
                                },
                                {
                                    value: "2",
                                    label: "Student",
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Poster"
                        name="poster_path"
                        rules={[
                            {
                                required: true,
                                message: "Please upload a poster!",
                            },
                        ]}
                    >
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            beforeUpload={() => false} // Prevent automatic upload
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
