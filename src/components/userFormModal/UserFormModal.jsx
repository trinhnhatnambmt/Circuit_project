import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

function UserFormModal({
    isOpen,
    onCloseModal,
    onSaveUser,
    loading,
    fileList,
    handlePreview,
    handleChange,
}) {
    const [form] = useForm();

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: "none",
            }}
            type="button"
        >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    const handleOk = () => {
        form.submit();
    };

    return (
        <Modal
            title="Add New User"
            open={isOpen}
            onCancel={onCloseModal}
            footer={[
                <Button key="back" onClick={onCloseModal}>
                    Cancel
                </Button>,
                <Button
                    type="primary"
                    onClick={handleOk}
                    loading={loading}
                    key=""
                    style={{ backgroundColor: "#b5ed3d", color: "#032e32" }}
                >
                    Confirm
                </Button>,
            ]}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 24 }}
                onFinish={onSaveUser}
            >
                <Form.Item name="id" hidden>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                    ]}
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true, message: "Please input your name!" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        { required: true, message: "Please input your phone!" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Role"
                    name="role"
                    rules={[
                        { required: true, message: "Please input your name!" },
                    ]}
                >
                    <Select
                        disabled
                        showSearch
                        placeholder="Select a role"
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                        options={[
                            { value: "MENTOR", label: "Mentor" },
                            { value: "STUDENT", label: "Student" },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                        {
                            required: true,
                            message: "Please select your gender!",
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select gender"
                        options={[
                            { value: "MALE", label: "Male" },
                            { value: "FEMALE", label: "Female" },
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
    );
}

export default UserFormModal;
