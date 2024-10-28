import { useParams } from "react-router-dom";
import { avatar, background, blog__test } from "../../assets/image";
import Blog_Menu from "../../components/blog/menu/Menu";
import Comments from "../../components/comments/Comment";
import "./index.scss";
import { useEffect, useState } from "react";
import { getBlogWithId } from "~/services/apiServices";
import { format } from "date-fns";
import axios from "axios";

function BlogDetail() {
    const params = useParams();
    const blogId = params.id;
    const [blogDetail, setBlogDetail] = useState({});
    const [comments, setComments] = useState([]);

    // Ensure createdAt is defined before formatting
    const formattedDate = blogDetail?.createdAt
        ? format(new Date(blogDetail.createdAt), "dd / MM / yyyy")
        : "Date not available";

    const fetchBlogDetail = async () => {
        try {
            const response = await axios.get(
                `http://167.71.220.5:8080/blog/view/${blogId}`
            );
            setBlogDetail(response.data.data);
            setComments(response.data.data.comments || []);
        } catch (error) {
            console.error("Failed to fetch blog detail:", error);
        }
    };

    useEffect(() => {
        fetchBlogDetail();
    }, [blogId]);

    return (
        <div className="blog__detail">
            <div className="container">
                <div className="blog__detail-inner">
                    <div className="blog__detail-media">
                        <div className="blog__detail-media-left">
                            <h1 className="blog__detail-media-title">
                                {blogDetail?.title}
                            </h1>
                            <div className="blog__detail-media-user">
                                <img
                                    src={avatar}
                                    alt=""
                                    className="blog__detail-avatar"
                                />
                                <div className="blog__detail-media-info">
                                    <span className="username">
                                        {blogDetail?.authorName}
                                    </span>
                                    <div className="date">{formattedDate}</div>
                                </div>
                            </div>
                        </div>
                        <img
                            src={blogDetail?.image}
                            alt=""
                            className="media-img"
                        />
                    </div>

                    <div className="blog__detail-content">
                        <div className="blog__detail-post">
                            <div className="blog__detail-post-inner">
                                <p className="blog__detail-desc">
                                    {blogDetail?.description}
                                </p>
                            </div>
                            <Comments
                                comments={comments}
                                blogId={blogId}
                                setComments={setComments}
                                fetchBlogDetail={fetchBlogDetail}
                            />
                        </div>

                        <Blog_Menu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
