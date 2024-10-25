import { Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { mentor } from "../../assets/image";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Comments({ comments, blogId }) {
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [commentText, setCommentText] = useState("");
    const userInfo = useSelector((state) => state.user.account.userInfo);
    const author = userInfo.data.name;

    const handleComments = async () => {
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
        setCommentText("");
    };

    const handleDeleteComment = async (commentId) => {
        const res = await axios.delete(
            `http://167.71.220.5:8080/comment/delete/${commentId}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        toast.success(res.data.message);
    };
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
                        onClick={() => handleComments()}
                        className="btn submit__btn"
                    >
                        Submit feedback
                    </button>
                </div>
            </div>
            <div className="customer__feedback">
                <div className="customer__feedback-title">
                    What our customers are saying
                </div>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        //Comments
                        <div
                            className="customer__feedback-card"
                            key={comment.id}
                        >
                            <img src={mentor} alt="" className="feedback-avt" />
                            <div className="customer__feedback-info">
                                <h1 className="info-name">
                                    {comment.authorName}
                                </h1>
                                <p className="info-desc">
                                    {comment.description}
                                </p>
                                {comment.authorName === author && (
                                    <div className="comment__act">
                                        <Button type="primary">Edit</Button>
                                        <Button
                                            type="primary"
                                            danger
                                            onClick={() =>
                                                handleDeleteComment(comment.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ marginTop: "10px" }}>No comments yet...</p>
                )}
            </div>
        </div>
    );
}

export default Comments;
