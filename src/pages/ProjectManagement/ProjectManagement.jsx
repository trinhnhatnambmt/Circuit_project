import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Popconfirm, Table, Tag } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProjectManagement() {
    const [dataSource, setDataSource] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
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
            dataIndex: "topicId",
            key: "topicId",
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

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fetchDataTopic = async () => {
        const response = await axios.get(
            "http://167.71.220.5:8080/topic/view/by-account",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        setDataSource(response.data.data);
    };

    useEffect(() => {
        fetchDataTopic();
    }, []);

    const handleDeleteTopic = async (topicId) => {
        const res = await axios.delete(
            `http://167.71.220.5:8080/topic/delete/${topicId}`,
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
        setLoading(true);
        try {
            if (values.topicId) {
                const res = await axios.put(
                    `http://167.71.220.5:8080/topic/update/${values.topicId}`,
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
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="project">
            <div className="container">
                <h1
                    className="project__title"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "20px",
                    }}
                >
                    Project Management
                </h1>

                <div className="project__content" style={{ marginTop: "10px" }}>
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
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button
                                type="primary"
                                onClick={handleOk}
                                loading={loading}
                                key=""
                                style={{
                                    backgroundColor: "#b5ed3d",
                                    color: "#032e32",
                                }}
                            >
                                Confirm
                            </Button>,
                        ]}
                    >
                        <Form
                            name="basic"
                            labelCol={{
                                span: 24,
                            }}
                            form={form}
                            onFinish={handleSaveTopic}
                        >
                            <Form.Item name="topicId" label="id" hidden>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Title"
                                name="topicName"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your topic name!!",
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
            </div>
        </div>
    );
}

export default ProjectManagement;
