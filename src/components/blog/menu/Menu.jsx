import { Link } from "react-router-dom";
import "./index.scss";
import { blog__test } from "../../../assets/image";
import MenuCategories from "../menuCategories/MenuCategories";
import { useEffect, useState } from "react";
import { getBlogFeatured } from "~/services/apiServices";
import { format } from "date-fns";
function Blog_Menu() {
    const [blogFeatures, setBlogFeatures] = useState([]);

    const fetchDataFeatured = async () => {
        const res = await getBlogFeatured();
        setBlogFeatures(res.data);
    };

    useEffect(() => {
        fetchDataFeatured();
    }, []);

    return (
        <div className="blog__menu">
            <h2 className="blog__menu-subtitle">What's hot</h2>
            <h1 className="blog__menu-title">Most Popular</h1>
            <div className="blog__menu-items">
                {blogFeatures.map((feature) => (
                    <Link
                        to={`/blogDetail/${feature.id}`}
                        className="blog__menu-item"
                        key={feature.id}
                    >
                        <div className="blog__menu-imageContainer">
                            <img
                                src={feature.image}
                                alt=""
                                className="blog__menu-img"
                            />
                        </div>
                        <div className="blog__menu-textContainer">
                            <span className="blog__menu-category">
                                {feature.category}
                            </span>
                            <h3 className="blog__menu-postTitle">
                                {feature.title}
                            </h3>
                            <div className="blog__menu-detail">
                                <span className="blog__menu-username">
                                    {feature.authorName}
                                </span>
                                <span className="blog__menu-date">
                                    {format(
                                        new Date(feature.createdAt),
                                        "dd / MM / yyyy"
                                    )}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <MenuCategories />
        </div>
    );
}

export default Blog_Menu;
