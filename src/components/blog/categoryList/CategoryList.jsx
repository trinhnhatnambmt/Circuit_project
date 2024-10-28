import { Link } from "react-router-dom";
import { background } from "../../../assets/image";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoryList() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const res = await axios.get(
                "http://167.71.220.5:8080/blog/category/get-all"
            );
            setCategories(res.data.data || []);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="blog__category">
            <div className="blog__category__inner">
                <div className="blog__category-title">Popular Categories</div>
                <div className="blog__category-group">
                    {categories.map((category, index) => (
                        <Link
                            to={`/blogCategories/${category}`}
                            className="category-item"
                            key={index}
                        >
                            <img
                                src={background}
                                alt=""
                                className="category-img"
                            />
                            <p>{category}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryList;
