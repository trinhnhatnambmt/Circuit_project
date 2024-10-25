import { useParams } from "react-router-dom";
import Blog_Menu from "../../components/blog/menu/Menu";
import "./index.scss";
import { useEffect, useState } from "react";
import { getBlogWithCategories } from "~/services/apiServices";
import Card from "~/components/blog/cardList/card/Card";
function BlogCategories() {
    const params = useParams();
    const categoryPath = params.category;
    const [posts, setPosts] = useState([]);

    const fetchDataBlog = async () => {
        const res = await getBlogWithCategories(categoryPath);
        setPosts(res.data);
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
