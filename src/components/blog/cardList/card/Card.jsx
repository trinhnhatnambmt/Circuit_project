import { Link } from "react-router-dom";
import "./index.scss";
import { background, blog__test } from "../../../../assets/image";
function Card() {
    return (
        <div className="blog__card">
            <div className="blog__card-imageContainer">
                <img src={background} alt="" />
            </div>
            <div className="blog__card-textContainer">
                <div className="blog__card-detail">
                    <span className="blog__card-date">11.02.2023</span>
                    <span className="blog__card-category">Front end</span>
                </div>
                <Link to="/blogDetail">
                    <h1 className="blog__card-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint, iure?
                    </h1>
                </Link>
                <p className="blog__card-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    magni aliquam, rerum, maxime similique officiis animi ea
                    aliquid doloribus aperiam libero in numquam impedit quasi
                    vitae explicabo nisi dolorem harum.
                </p>
                <Link to="/blogDetail" className="blog__card-link">
                    Read more
                </Link>
            </div>
        </div>
    );
}

export default Card;
