import { Link } from "react-router-dom";
import "./index.scss";
import { format } from "date-fns";
import { Button } from "antd";
function Card({ post, isMyBlog, onEdit, onDelete }) {
    const formattedDate = format(new Date(post.createdAt), "dd / MM / yyyy");
    return (
        <div className="blog__card">
            <div className="blog__card-imageContainer">
                <img src={post.image} alt="" />
            </div>
            <div className="blog__card-textContainer">
                <div className="blog__card-detail">
                    <span className="blog__card-date">{formattedDate}</span>
                    <span className="blog__card-category">{post.category}</span>
                </div>
                <Link to={`/blogDetail/${post.id}`}>
                    <h1 className="blog__card-title">{post.title}</h1>
                </Link>
                <p className="blog__card-desc">{post.description}</p>
                <Link to={`/blogDetail/${post.id}`} className="blog__card-link">
                    Read more
                </Link>
                {isMyBlog && (
                    <div className="blog__card-actions">
                        <Button
                            type="primary"
                            className="blog__card-edit"
                            style={{
                                marginRight: "10px",
                                backgroundColor: "#b5ed3d",
                                color: "#032e32",
                            }}
                            onClick={() => onEdit(post.id)}
                        >
                            Edit
                        </Button>
                        <Button
                            type="primary"
                            danger
                            className="blog__card-delete"
                            onClick={() => onDelete(post.id)}
                        >
                            Delete
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
