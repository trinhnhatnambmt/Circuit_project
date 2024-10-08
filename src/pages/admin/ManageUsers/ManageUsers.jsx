import { Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import "./index.scss";

function ManageUsers() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="manage__user">
            <h1 className="manage__user-title">Manage User</h1>
            <button onClick={handleOpenModal} className="btn add__user-btn">
                Add New User
            </button>
            <Modal
                title="Add New User"
                open={isOpen}
                // onOk={handleOk}
                onCancel={handleCloseModal}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
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
                </Form>
            </Modal>
        </div>
    );
}

export default ManageUsers;
