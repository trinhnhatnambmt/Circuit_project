import { Link } from "react-router-dom";
import "./index.scss";
import { blog__test } from "../../../assets/image";
import MenuCategories from "../menuCategories/MenuCategories";
function Blog_Menu() {
    return (
        <div className="blog__menu">
            <h2 className="blog__menu-subtitle">What's hot</h2>
            <h1 className="blog__menu-title">Most Popular</h1>
            <div className="blog__menu-items">
                <Link className="blog__menu-item">
                    <div className="blog__menu-imageContainer">
                        <img
                            src={blog__test}
                            alt=""
                            className="blog__menu-img"
                        />
                    </div>
                    <div className="blog__menu-textContainer">
                        <span className="blog__menu-category">Engineer</span>
                        <h3 className="blog__menu-postTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam, autem.
                        </h3>
                        <div className="blog__menu-detail">
                            <span className="blog__menu-username">
                                John Doe
                            </span>
                            <span className="blog__menu-date">10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link className="blog__menu-item">
                    <div className="blog__menu-imageContainer">
                        <img
                            src={blog__test}
                            alt=""
                            className="blog__menu-img"
                        />
                    </div>
                    <div className="blog__menu-textContainer">
                        <span className="blog__menu-category">Engineer</span>
                        <h3 className="blog__menu-postTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam, autem.
                        </h3>
                        <div className="blog__menu-detail">
                            <span className="blog__menu-username">
                                John Doe
                            </span>
                            <span className="blog__menu-date">10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link className="blog__menu-item">
                    <div className="blog__menu-imageContainer">
                        <img
                            src={blog__test}
                            alt=""
                            className="blog__menu-img"
                        />
                    </div>
                    <div className="blog__menu-textContainer">
                        <span className="blog__menu-category">Engineer</span>
                        <h3 className="blog__menu-postTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam, autem.
                        </h3>
                        <div className="blog__menu-detail">
                            <span className="blog__menu-username">
                                John Doe
                            </span>
                            <span className="blog__menu-date">10.03.2023</span>
                        </div>
                    </div>
                </Link>
                <Link className="blog__menu-item">
                    <div className="blog__menu-imageContainer">
                        <img
                            src={blog__test}
                            alt=""
                            className="blog__menu-img"
                        />
                    </div>
                    <div className="blog__menu-textContainer">
                        <span className="blog__menu-category">Engineer</span>
                        <h3 className="blog__menu-postTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam, autem.
                        </h3>
                        <div className="blog__menu-detail">
                            <span className="blog__menu-username">
                                John Doe
                            </span>
                            <span className="blog__menu-date">10.03.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
            <MenuCategories />
        </div>
    );
}

export default Blog_Menu;
