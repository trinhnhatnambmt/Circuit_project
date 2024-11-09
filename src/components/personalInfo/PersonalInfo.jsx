import { Link } from "react-router-dom";
import { add, leaf, money } from "../../assets/image";
import "./index.scss";
import {
    Button,
    Card,
    Col,
    Form,
    Image,
    Input,
    Modal,
    Row,
    Select,
    Upload,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserData } from "../../redux/features/user/userSlice";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../utils/upload";
import { toast } from "react-toastify";

function PersonalInfo() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.account.access_token);
    const userInfo = useSelector((state) => state.user.account.userInfo);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = useForm();

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchUserData(accessToken)); // Gọi thunk action để fetch data
        }
    }, [accessToken, dispatch]);

    // console.log("User Info:", userInfo.data);

    const handleCloseModal = () => {
        setIsOpen(false);
        setFileList([]);
        form.resetFields();
    };

    const handleOk = () => {
        form.submit();
    };

    const handleOpenModal = () => {
        setIsOpen(true);
        form.setFieldsValue({
            name: userInfo.data.name,
            email: userInfo.data.email,
            gender: userInfo.data.gender,
            phone: userInfo.data.phone,
            role: userInfo.data.role,
        });
    };

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

    const handleSaveUser = async (values) => {
        setLoading(true);

        try {
            let url = userInfo.data.avatar; // Giữ nguyên URL cũ

            // Kiểm tra xem có file ảnh mới không
            if (values.avatar && values.avatar.file) {
                url = await uploadFile(values.avatar.file.originFileObj);
            }

            // Cập nhật các giá trị người dùng
            const updatedValues = { ...values, avatar: url };

            await axios.put(
                `http://167.71.220.5:8080/account/profile/update-profile`,
                updatedValues, // Gửi giá trị đã cập nhật
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            dispatch(fetchUserData(accessToken));
            setLoading(false);

            form.resetFields();
            setFileList([]);
            handleCloseModal();
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Failed to update user");
        }
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

    return (
        <div className="personal-info">
            <div className="personal-info-item">
                <h2
                    className="personal-info__heading"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "10px",
                    }}
                >
                    My Wallet
                </h2>

                <div className="row">
                    <div className="col-4">
                        <article
                            className="payment-card"
                            style={{ backgroundColor: "#e0eae5" }}
                        >
                            <img
                                src={leaf}
                                alt=""
                                className="payment-card__img"
                            />
                            <div className="payment-card__number">
                                <img src={money} alt="" />
                                {userInfo?.data?.walletPoint}
                            </div>
                            <div className="payment-card__bottom">
                                <div>
                                    <p className="payment-card__label">
                                        Card Holder
                                    </p>
                                    <p className="payment-card__value">
                                        Imran Khan
                                    </p>
                                </div>
                                <div className="payment-card__expired">
                                    <p className="payment-card__label">
                                        Expired
                                    </p>
                                    <p className="payment-card__value">10/22</p>
                                </div>
                                <div className="payment-card__circle" />
                            </div>
                        </article>
                    </div>

                    <div className="col-4">
                        <Link className="new-card">
                            <img src={add} alt className="new-card__icon" />
                            <p className="new-card__text">Add More Point</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="personal-info-item">
                <h2
                    className="personal-info__heading"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "10px",
                        marginBottom: "20px",
                    }}
                >
                    Personal Info
                </h2>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card
                            type="inner"
                            title="Name"
                            style={{
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                        >
                            {userInfo.data.name}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            type="inner"
                            title="Email"
                            style={{
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                        >
                            {userInfo.data.email}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{
                                marginTop: 16,
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                            type="inner"
                            title="Gender"
                        >
                            {userInfo.data.gender}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{
                                marginTop: 16,
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                            type="inner"
                            title="Phone"
                        >
                            {userInfo.data.phone}
                        </Card>
                    </Col>
                </Row>
                <button
                    onClick={handleOpenModal}
                    className="btn edit__profile-btn"
                >
                    Edit Profile
                </button>
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
                            <Input disabled />
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
                            label="Phone"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your phone!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your gender!",
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a role"
                                options={[
                                    {
                                        value: "MALE",
                                        label: "MALE",
                                    },
                                    {
                                        value: "FEMALE",
                                        label: "FEMALE",
                                    },
                                ]}
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
                                disabled
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
                            onVisibleChange: (visible) =>
                                setPreviewOpen(visible),
                            afterOpenChange: (visible) =>
                                !visible && setPreviewImage(""),
                        }}
                        src={previewImage}
                    />
                )}
            </div>
        </div>
    );
}

export default PersonalInfo;
