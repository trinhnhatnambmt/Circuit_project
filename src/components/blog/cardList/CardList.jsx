import { useEffect, useState } from "react";
import Card from "./card/Card";
import "./index.scss";
import axios from "axios";
import { Pagination } from "antd";

function CardList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const fetchDataPosts = async () => {
        try {
            const response = await axios.get(
                "http://167.71.220.5:8080/blog/view/all"
            );

            setPosts(response.data.data || []);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]); // Set posts to empty array if fetch fails
        }
    };

    useEffect(() => {
        fetchDataPosts();
    }, []);

    // Calculate posts to display on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="card__list">
            <h1 className="card__list-title">Recent Posts</h1>
            <div className="card__list-posts">
                {currentPosts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
            {posts.length > 0 && (
                <Pagination
                    current={currentPage}
                    pageSize={postsPerPage}
                    total={posts.length}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            )}
        </div>
    );
}

export default CardList;
