import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { getBlogCategories } from "~/services/apiServices";
function MenuCategories() {
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const res = await getBlogCategories();
        setCategories(res.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className="menu__categories">
            <h2 className="blog__menu-subtitle">Discover by topic</h2>
            <h1 className="blog__menu-title">Categories</h1>
            <div className="menu__categories-group">
                {categories.map((category, index) => (
                    <Link className="menu__categories-item" key={index}>
                        <p>{category}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MenuCategories;
