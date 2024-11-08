import { Avatar, Button, Drawer, Form, Input, Modal } from "antd";
import "./index.scss";
import Recent from "./Menus/Recents";
import WorkSpace from "./Menus/WorkSpace";
import AvatarGroup from "./Menus/AvatarGroup";
import { DatabaseOutlined, UserAddOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { mentor } from "~/assets/image";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
function BoardBar({ board }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [members, setMembers] = useState([]);

    const [form] = useForm();
    const handleOk = () => {
        form.submit();
    };

    const handleFetchData = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/group/view-my-group",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        setMembers(res.data.data.studentList);
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    const handleInviteMemberByEmail = async (values) => {
        const res = await axios.post(
            "http://167.71.220.5:8080/group/add-account",
            { email: values.email },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        console.log("Check invite Email:", res);
        toast.success(res.data.message);
        setOpenModal(false);
        form.resetFields();
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
                        onFinish={handleInviteMemberByEmail}
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
                            <Input type="email" />
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
                    {members.map((member, index) => (
                        <div
                            className="boardBar__right-group"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginTop: "10px",
                            }}
                            key={index}
                        >
                            <Avatar src={member.accountAvatar} size={64} />
                            <div className="group-right">
                                <p
                                    style={{
                                        fontSize: "25px",
                                        fontWeight: "600",
                                    }}
                                >
                                    {member.accountName}
                                </p>
                                <p
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        marginTop: "5px",
                                    }}
                                >
                                    {member.accountEmail}
                                </p>
                            </div>
                        </div>
                    ))}
                </Drawer>
                <AvatarGroup />
            </div>
        </div>
    );
}

export default BoardBar;
