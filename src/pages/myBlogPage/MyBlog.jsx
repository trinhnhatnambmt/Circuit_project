import { Pagination } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "~/components/blog/cardList/card/Card";
import { toast } from "react-toastify";

function MyBlog() {
    const [posts, setPosts] = useState([]); // Khởi tạo posts với mảng rỗng
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const fetchDataPosts = async () => {
        try {
            const res = await axios.get(
                "http://167.71.220.5:8080/blog/view/by-account",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            setPosts(res.data.data || []);
        } catch (error) {
            console.error("Error fetching posts:", error);
            toast.error("Failed to fetch posts.");
        }
    };

    useEffect(() => {
        if (accessToken) {
            fetchDataPosts();
        }
    }, [accessToken]);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `http://167.71.220.5:8080/blog/delete/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(response.data.message);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
            toast.error("Failed to delete post.");
        }
    };

    // Tính toán các bài viết hiển thị trên trang hiện tại
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Hàm để xử lý sự kiện khi người dùng thay đổi trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="my__blog">
            <div className="container">
                <div className="card__list">
                    <h1 className="card__list-title">My Posts</h1>
                    <div className="card__list-posts">
                        {currentPosts.map((post) => (
                            <Card
                                key={post.id}
                                post={post}
                                isMyBlog={true}
                                onDelete={handleDelete}
                            />
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
            </div>
        </div>
    );
}

export default MyBlog;
