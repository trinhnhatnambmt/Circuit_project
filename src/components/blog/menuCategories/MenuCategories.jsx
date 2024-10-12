import { Link } from "react-router-dom";
import "./index.scss";
function MenuCategories() {
    return (
        <div className="menu__categories">
            <h2 className="blog__menu-subtitle">Discover by topic</h2>
            <h1 className="blog__menu-title">Categories</h1>
            <div className="menu__categories-group">
                <Link className="menu__categories-item">
                    <p>Front end</p>
                </Link>
                <Link className="menu__categories-item">
                    <p>Front end</p>
                </Link>{" "}
                <Link className="menu__categories-item">
                    <p>Front end</p>
                </Link>{" "}
                <Link className="menu__categories-item">
                    <p>Front end</p>
                </Link>{" "}
                <Link className="menu__categories-item">
                    <p>Front end</p>
                </Link>
            </div>
        </div>
    );
}

export default MenuCategories;
