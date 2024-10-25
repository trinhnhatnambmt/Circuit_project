import { useEffect, useState } from "react";
// import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Form, Image, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import { getBlogCategories, getBlogWithId } from "~/services/apiServices";
import { toast } from "react-toastify";
import uploadFile from "~/utils/upload";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "~/components/Loader/Loader";
import { useParams } from "react-router-dom";

function EditBlogPage() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const blogId = params.id;

    // Tùy chọn đầy đủ cho toolbar với nhiều chức năng hơn
    const toolbarOptions = [
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // Các cấp tiêu đề
        ["bold", "italic", "underline", "strike"], // In đậm, nghiêng, gạch chân, gạch ngang
        [{ list: "ordered" }, { list: "bullet" }], // Danh sách có thứ tự, không thứ tự
        [{ indent: "-1" }, { indent: "+1" }], // Thụt dòng
        [{ align: [] }], // Căn chỉnh văn bản
        // ["link", "image", "video"], // Chèn link, hình ảnh, video
        [{ color: [] }, { background: [] }], // Màu chữ, màu nền
        ["clean"], // Nút xóa định dạng
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: "none",
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const fetchCategories = async () => {
        const res = await getBlogCategories();
        setCategories(res.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    const accessToken = useSelector((state) => state.user.account.access_token);

    const sanitizeContent = (content) => content.replace(/<\/?p>/g, ""); // Hàm loại bỏ thẻ <p>

    const fetchDataBlogById = async () => {
        try {
            setLoading(true);
            const response = await getBlogWithId(blogId);
            const { title, description, image, category } = response.data;
            setTitle(title);
            setContent(description);
            setSelectedCategory(category);
            setFileList([{ url: image, name: "Blog Image", status: "done" }]);
        } catch (error) {
            console.error("Error fetching blog details:", error);
            toast.error("Failed to fetch blog details");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataBlogById();
    }, [blogId]);

    const handleEditBlog = async () => {
        const sanitizedContent = sanitizeContent(content);

        const uploadedUrls = [];
        setLoading(true);

        for (const file of fileList) {
            let url = await uploadFile(file.originFileObj);
            uploadedUrls.push(url);
        }

        try {
            const response = await axios.put(
                `http://167.71.220.5:8080/blog/update/${blogId}`,
                {
                    title: title,
                    description: sanitizedContent,
                    image: uploadedUrls[0],
                    blogCategoryEnum: selectedCategory,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(response.data.message);
            // setTitle("");
            // setContent("");
            // setFileList([]);
            // setSelectedCategory(null);
        } catch (error) {
            console.error("Error create blog:", error);
            toast.error("Failed to create blog");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="writePage" style={{ height: "800px" }}>
            {loading && (
                <div className="loader-container">
                    <Loader />
                </div>
            )}
            <div className="container">
                <div className="writePage__inner">
                    <div className="writePage__content-act">
                        <input
                            type="text"
                            placeholder="Title"
                            className="writePage__input"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <button
                            onClick={handleEditBlog}
                            className="btn writePage__btn"
                        >
                            Publish
                        </button>
                    </div>

                    <div className="writePage__editor">
                        <ReactQuill
                            modules={modules}
                            theme="snow"
                            value={content}
                            onChange={(content) => setContent(content)}
                            placeholder="Tell your story..."
                            className="editor"
                        />
                        <div className="writePage__editor-img">
                            <Select
                                placeholder="Select category..."
                                style={{ width: "100%", marginBottom: "10px" }}
                                value={selectedCategory} // Sử dụng selectedCategory
                                onChange={(value) => setSelectedCategory(value)}
                            >
                                {categories &&
                                    categories.length > 0 &&
                                    categories.map((category, index) => (
                                        <Option key={index} value={category}>
                                            {category}
                                        </Option>
                                    ))}
                            </Select>
                            <Upload
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            {previewImage && (
                                <Image
                                    wrapperStyle={{
                                        display: "none",
                                    }}
                                    preview={{
                                        visible: previewOpen,
                                        onVisibleChange: (visible) =>
                                            setPreviewOpen(visible),
                                        afterOpenChange: (visible) =>
                                            !visible && setPreviewImage(""),
                                    }}
                                    src={previewImage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditBlogPage;
