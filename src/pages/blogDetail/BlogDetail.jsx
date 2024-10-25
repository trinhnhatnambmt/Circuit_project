import { useParams } from "react-router-dom";
import { avatar, background, blog__test } from "../../assets/image";
import Blog_Menu from "../../components/blog/menu/Menu";
import Comments from "../../components/comments/Comment";
import "./index.scss";
import { useEffect, useState } from "react";
import { getBlogWithId } from "~/services/apiServices";
import { format } from "date-fns";

function BlogDetail() {
    const params = useParams();
    const blogId = params.id;
    const [blogDetail, setBlogDetail] = useState({});
    const [comments, setComments] = useState([]);
    // const formattedDate = format(new Date(blogDetail.createdAt), "dd / MM / yyyy");
    const fetchMentorDetail = async () => {
        // setLoading(true);
        try {
            const response = await getBlogWithId(blogId);
            setBlogDetail(response.data);
            setComments(response.data.comments);
        } catch (error) {
            console.error("Failed to fetch mentor detail:", error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchMentorDetail();
    }, [blogId]);

    return (
        <div className="blog__detail">
            <div className="container">
                <div className="blog__detail-inner">
                    <div className="blog__detail-media">
                        <div className="blog__detail-media-left">
                            <h1 className="blog__detail-media-title">
                                {blogDetail.title}
                            </h1>
                            <div className="blog__detail-media-user">
                                <img
                                    src={avatar}
                                    alt=""
                                    className="blog__detail-avatar"
                                />
                                <div className="blog__detail-media-info">
                                    <span className="username">Trinh Huy</span>
                                    <div className="date">01.01.2024</div>
                                </div>
                            </div>
                        </div>
                        <img
                            src={blogDetail.image}
                            alt=""
                            className="media-img"
                        />
                    </div>

                    <div className="blog__detail-content">
                        <div className="blog__detail-post">
                            <div className="blog__detail-post-inner">
                                <p className="blog__detail-desc">
                                    {blogDetail.description}
                                </p>
                            </div>
                            <Comments comments={comments} />
                        </div>

                        <Blog_Menu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
