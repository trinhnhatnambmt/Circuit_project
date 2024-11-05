import { Button, Form, Rate, Spin, Dropdown, Menu } from "antd"; // Import Dropdown, Menu
import TextArea from "antd/es/input/TextArea";
import { mentor } from "../../assets/image";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "antd/es/modal/Modal";
import { useForm } from "antd/es/form/Form";
import { EllipsisOutlined } from "@ant-design/icons"; // Import biểu tượng

function Comments({ comments, blogId, fetchBlogDetail }) {
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [commentText, setCommentText] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingComments, setLoadingComments] = useState({});
    const userInfo = useSelector((state) => state.user.account.userInfo);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCommentId, setCurrentCommentId] = useState(null);
    const author = userInfo?.data?.name || "Anonymous";

    const [form] = useForm();

    const handleOk = async () => {
        try {
            await form.validateFields();
            const values = form.getFieldsValue();
            setLoading(true);
            await handleEditComment(currentCommentId, values.description);
            setIsModalOpen(false);
            form.resetFields();
        } catch (error) {
            console.error("Validation Failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const showModal = (comment) => {
        setIsModalOpen(true);
        setCurrentCommentId(comment.id);
        form.setFieldsValue({ description: comment.description });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleComments = async () => {
        setLoading(true);
        try {
            await axios.post(
                `http://167.71.220.5:8080/comment/create`,
                {
                    blogId: blogId,
                    comment: commentText,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            toast.success("Create comment successfully!!!");
            fetchBlogDetail();
            setCommentText("");
        } catch (error) {
            console.error("Failed to add comment:", error);
            toast.error("Failed to create comment.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteComment = async (commentId) => {
        setLoadingComments((prev) => ({ ...prev, [commentId]: true }));
        try {
            const res = await axios.delete(
                `http://167.71.220.5:8080/comment/delete/${commentId}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            fetchBlogDetail();
            toast.success(res.data.message);
        } catch (error) {
            console.error("Failed to delete comment:", error);
            toast.error("Failed to delete comment.");
        } finally {
            setLoadingComments((prev) => ({ ...prev, [commentId]: false }));
        }
    };

    const handleEditComment = async (commentId, newDescription) => {
        try {
            const res = await axios.put(
                `http://167.71.220.5:8080/comment/update/${commentId}`,
                { comment: newDescription },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            toast.success(res.data.message);
            fetchBlogDetail();
        } catch (error) {
            console.error("Failed to update comment:", error);
            toast.error("Failed to update comment.");
        }
    };

    // Menu cho các hành động Edit và Delete
    const menu = (comment) => (
        <Menu>
            <Menu.Item key="1" onClick={() => showModal(comment)}>
                Edit
            </Menu.Item>
            <Menu.Item
                key="2"
                danger
                onClick={() => handleDeleteComment(comment.id)}
            >
                Delete
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="mentor-detail__reviews">
            <div
                className="reviews__title"
                style={{
                    borderTop: "1px solid #d2d1d6",
                    paddingTop: "10px",
                }}
            >
                Reviews
            </div>
            <div className="mentor-detail__feedback">
                <h1 className="feedback__title">
                    What do you think our mentor?
                </h1>

                <TextArea
                    type="text"
                    className="feedback__input"
                    style={{ marginTop: "10px", height: "120px" }}
                    placeholder="What do you think ..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <div className="feedback__act">
                    <button
                        onClick={() => setCommentText("")}
                        className="btn submit__btn cancel__btn"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleComments}
                        className="btn submit__btn"
                        disabled={loading}
                    >
                        {loading ? <Spin size="small" /> : "Submit feedback"}
                    </button>
                </div>
            </div>
            <div className="customer__feedback">
                <div className="customer__feedback-title">
                    What our customers are saying
                </div>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div
                            className="customer__feedback-card"
                            key={comment.id}
                        >
                            <img
                                src={comment.authorAvatarUrl}
                                alt=""
                                className="feedback-avt"
                            />
                            <div className="customer__feedback-info">
                                <div className="info-wrapper">
                                    <h1 className="info-name">
                                        {comment.authorName}
                                    </h1>
                                    {comment.authorName === author && (
                                        <div className="comment__act">
                                            <Dropdown
                                                overlay={menu(comment)}
                                                trigger={["click"]}
                                            >
                                                <Button
                                                    icon={<EllipsisOutlined />}
                                                />
                                            </Dropdown>
                                        </div>
                                    )}
                                </div>
                                <p className="info-desc">
                                    {comment.description}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ marginTop: "10px" }}>No comments yet...</p>
                )}
                <Modal
                    title="Edit Comment"
                    open={isModalOpen}
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
                    onCancel={handleCancel}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 24,
                        }}
                        form={form}
                    >
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your description!",
                                },
                            ]}
                        >
                            <TextArea style={{ height: "100px" }} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
}

export default Comments;
