import { useParams } from "react-router-dom";
import Blog_Menu from "../../components/blog/menu/Menu";
import "./index.scss";
import { useEffect, useState } from "react";
import Card from "~/components/blog/cardList/card/Card";
import axios from "axios";
function BlogCategories() {
    const params = useParams();
    const categoryPath = params.category;
    const [posts, setPosts] = useState([]);

    const fetchDataBlog = async () => {
        const res = await axios.get(
            `http://167.71.220.5:8080/blog/view/by-category/${categoryPath}`
        );
        setPosts(res.data.data);
    };

    useEffect(() => {
        fetchDataBlog();
    }, [categoryPath]);
    return (
        <div className="blogCategories blog">
            <div className="container">
                <h1 className="blogCategories-title">{categoryPath}</h1>
                <div className="blog__main">
                    <div className="card__list-posts">
                        {posts.map((post) => (
                            <Card key={post.id} post={post} />
                        ))}
                    </div>

                    <Blog_Menu />
                </div>
            </div>
        </div>
    );
}

export default BlogCategories;
