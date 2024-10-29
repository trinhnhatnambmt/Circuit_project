import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Popconfirm, Table, Tag } from "antd";
import { useForm } from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAdminTopics } from "~/services/apiServices";

function ManageTopic() {
    const [dataSource, setDataSource] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [form] = useForm();
    const columns = [
        {
            title: "Topic",
            dataIndex: "topicName",
            key: "topicName",
        },

        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Active",
            dataIndex: "isDeleted",
            key: "isDeleted",
            render: (isDeleted) => (
                <Tag color={isDeleted ? "red" : "green"}>
                    {isDeleted ? "No" : "Yes"}
                </Tag>
            ),
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id, record) => (
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
                            showModal();
                            form.setFieldsValue(record);
                        }}
                    >
                        Update
                    </Button>

                    {/* Nút Delete */}
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this user?"
                        onConfirm={() => handleDeleteTopic(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const fetchDataTopic = async () => {
        const response = await getAdminTopics();
        setDataSource(response.data);
    };

    useEffect(() => {
        fetchDataTopic();
    }, []);

    const handleDeleteTopic = async (id) => {
        const res = await axios.delete(
            `http://167.71.220.5:8080/topic/delete/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        toast.success(res.data.message);
        fetchDataTopic();
    };

    const handleSaveTopic = async (values) => {
        if (values.id) {
            const res = await axios.put(
                `http://167.71.220.5:8080/topic/update/${values.id}`,
                values,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(res.data.message);
        } else {
            const res = await axios.post(
                "http://167.71.220.5:8080/topic/create",
                values,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(res.data.message);
        }

        fetchDataTopic();
        handleCancel();
        form.resetFields();
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="manage__topic">
            <h1 className="manage__user-title">Manage Topic</h1>
            <button onClick={showModal} className="btn add__user-btn">
                <PlusSquareOutlined
                    style={{ marginRight: "8px", fontSize: "17px" }}
                />
                Add New Topic
            </button>
            <Table
                dataSource={dataSource}
                columns={columns}
                style={{ marginTop: "10px" }}
            />
            <Modal
                title="Add new topic"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    form={form}
                    onFinish={handleSaveTopic}
                >
                    <Form.Item name="id" label="id" hidden>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Title"
                        name="topicName"
                        rules={[
                            {
                                required: true,
                                message: "Please input your topic name!!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please input your topic description!!",
                            },
                        ]}
                    >
                        <TextArea style={{ height: "150px" }} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default ManageTopic;
