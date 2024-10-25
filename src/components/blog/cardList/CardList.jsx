import { useEffect, useState } from "react";
import Card from "./card/Card";
import "./index.scss";
import { getAllBlog } from "~/services/apiServices";
import { Pagination } from "antd";

function CardList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); 

    const fetchDataPosts = async () => {
        const response = await getAllBlog();
        setPosts(response.data);
    };

    useEffect(() => {
        fetchDataPosts();
    }, []);

    // Tính toán các bài viết hiển thị trên trang hiện tại
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Hàm để xử lý sự kiện khi người dùng thay đổi trang
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
            <Pagination
                current={currentPage}
                pageSize={postsPerPage}
                total={posts.length}
                onChange={handlePageChange}
                showSizeChanger={false}
            />
        </div>
    );
}

export default CardList;
