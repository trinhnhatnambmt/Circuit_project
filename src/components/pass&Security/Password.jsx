import { Button, Collapse, Divider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPassword } from "~/services/apiServices";

function Password() {
    const accessToken = useSelector((state) => state.user.account.access_token);

    const [form] = useForm();

    const handleChangePassword = async (values) => {
        const { newPassword, confirmPassword } = values;
        try {
            const token = accessToken;

            const response = await resetPassword(
                token,
                newPassword,
                confirmPassword
            );
            if (response.code === 200) {
                toast.success("Password reset successfully!");
            } else {
                toast.error("Failed to reset password.");
            }
        } catch (error) {
            console.error("Failed to reset password: ", error);
            toast.error("Failed to reset password. Please try again.");
        }
    };

    return (
        <div className="cart-info">
            <h2
                className="cart-info__heading"
                style={{
                    borderBottom: "1px solid #d2d1d6",
                    paddingBottom: "10px",
                    marginBottom: "20px",
                }}
            >
                Password and Security
            </h2>

            <Divider orientation="left">Login & Restore</Divider>
            <Collapse
                items={[
                    {
                        key: "1",
                        label: "Change password",
                        children: (
                            <Form
                                labelCol={{
                                    span: 24,
                                }}
                                form={form}
                                onFinish={handleChangePassword}
                            >
                                <Form.Item
                                    label="New Password"
                                    name="newPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your new password!",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    dependencies={["newPassword"]}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your new password again!",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (
                                                    !value ||
                                                    getFieldValue(
                                                        "newPassword"
                                                    ) === value
                                                ) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(
                                                    new Error(
                                                        "Passwords do not match!"
                                                    )
                                                );
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#b5ed3d",
                                            color: "#333",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default Password;
