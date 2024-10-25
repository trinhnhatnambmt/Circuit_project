import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Card from "./card/Card";
import "./index.scss";
import { getAllBlog } from "~/services/apiServices";
function CardList() {
    const [posts, setPosts] = useState([]);

    const fetchDataPosts = async () => {
        const response = await getAllBlog();
        setPosts(response.data);
    };

    useEffect(() => {
        fetchDataPosts();
    }, []);
    return (
        <div className="card__list">
            <h1 className="card__list-title">Recent Posts</h1>
            <div className="card__list-posts">
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
            <Pagination />
        </div>
    );
}

export default CardList;
