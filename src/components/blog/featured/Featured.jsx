import { useEffect, useState } from "react";
import { blog__test, fire } from "../../../assets/image";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
function Featured() {
    const [post, setPost] = useState({});

    const fetchData = async () => {
        const response = await axios.get(
            "http://167.71.220.5:8080/blog/view/most-commented"
        );
        setPost(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="featured">
            <div className="featured__inner">
                <h1 className="featured__title">
                    <b>Hey, Circuit here!</b> Discover our story and creative
                    your ideas
                    <img src={fire} alt="" />
                </h1>

                <div className="featured__post">
                    <div className="featured___post-imgContainer">
                        <img src={post.image} alt="" className="post__img" />
                    </div>
                    <div className="featured__post-textContainer">
                        <Link to={`/blogDetail/${post.id}`}>
                            <h1 className="featured__post-title">
                                {post.title}
                            </h1>
                        </Link>
                        <p className="featured__post-desc">
                            {post.description}
                        </p>
                        <button className="btn featured__post-btn">
                            <Link to={`/blogDetail/${post.id}`}>Read more</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
