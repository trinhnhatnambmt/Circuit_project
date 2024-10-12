import { Link } from "react-router-dom";
import { background } from "../../../assets/image";
import "./index.scss";
function CategoryList() {
    return (
        <div className="blog__category">
            <div className="blog__category__inner">
                <div className="blog__category-title">Popular Categories</div>
                <div className="blog__category-group">
                    <Link to="/blogCategories" className="category-item">
                        <img src={background} alt="" className="category-img" />
                        <p>Front end</p>
                    </Link>
                    <Link to="/blogCategories" className="category-item">
                        <img src={background} alt="" className="category-img" />
                        <p>Front end</p>
                    </Link>{" "}
                    <Link to="/blogCategories" className="category-item">
                        <img src={background} alt="" className="category-img" />
                        <p>Front end</p>
                    </Link>{" "}
                    <Link to="/blogCategories" className="category-item">
                        <img src={background} alt="" className="category-img" />
                        <p>Front end</p>
                    </Link>{" "}
                    <Link to="/blogCategories" className="category-item">
                        <img src={background} alt="" className="category-img" />
                        <p>Front end</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;
