import { Link } from "react-router-dom";
import "./index.scss";
import { format } from "date-fns";
function Card({ post }) {
    const formattedDate = format(new Date(post.createdAt), "dd / MM / yyyy");
    return (
        <div className="blog__card">
            <div className="blog__card-imageContainer">
                <img src={post.image} alt="" />
            </div>
            <div className="blog__card-textContainer">
                <div className="blog__card-detail">
                    <span className="blog__card-date">{formattedDate}</span>
                    <span className="blog__card-category">Front end</span>
                </div>
                <Link to={`/blogDetail/${post.id}`}>
                    <h1 className="blog__card-title">{post.title}</h1>
                </Link>
                <p className="blog__card-desc">{post.description}</p>
                <Link to={`/blogDetail/${post.id}`} className="blog__card-link">
                    Read more
                </Link>
            </div>
        </div>
    );
}

export default Card;
