import { Avatar, Button, Drawer, Form, Input, Modal } from "antd";
import "./index.scss";
import Recent from "./Menus/Recents";
import WorkSpace from "./Menus/WorkSpace";
import AvatarGroup from "./Menus/AvatarGroup";
import { DatabaseOutlined, UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import { mentor } from "~/assets/image";
import { useForm } from "antd/es/form/Form";
function BoardBar({ board }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [form] = useForm();
    const handleOk = () => {
        form.submit();
    };

    return (
        <div className="boardBar">
            <div className="boardBar__left">
                <h1 className="boardBar-title">Project Management</h1>
                {/* <WorkSpace />
                <Recent /> */}
                <Button
                    type="primary"
                    icon={<UserAddOutlined style={{ fontSize: "16px" }} />}
                    style={{
                        color: "#333",
                        backgroundColor: "#b5ed3d",
                        fontWeight: "600",
                    }}
                    onClick={() => setOpenModal(true)}
                >
                    Invite
                </Button>
                <Modal
                    title="Add people to your group"
                    open={openModal}
                    onOk={handleOk}
                    onCancel={() => setOpenModal(false)}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 24,
                        }}
                        form={form}
                        // onFinish={handleSaveUser}
                    >
                        <Form.Item
                            label="Write your member email"
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
                    </Form>
                </Modal>
            </div>
            <div className="boardBar__right">
                <Button
                    type="primary"
                    icon={<DatabaseOutlined />}
                    style={{
                        color: "#333",
                        backgroundColor: "#b5ed3d",
                        fontWeight: "600",
                    }}
                    onClick={() => setOpenDrawer(true)}
                >
                    My group
                </Button>
                <Drawer
                    title="My group"
                    onClose={() => setOpenDrawer(false)}
                    open={openDrawer}
                    width={"50%"}
                >
                    <div
                        className="boardBar__right-group"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Avatar src={mentor} size={64} />
                        <div className="group-right">
                            <p style={{ fontSize: "25px", fontWeight: "600" }}>
                                Name
                            </p>
                            <p
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    marginTop: "5px",
                                }}
                            >
                                Email
                            </p>
                        </div>
                    </div>
                </Drawer>
                <AvatarGroup />
            </div>
        </div>
    );
}

export default BoardBar;
