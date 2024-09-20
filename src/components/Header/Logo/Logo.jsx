import { Link } from "react-router-dom";
import "./Logo.scss";
function Logo() {
    return (
        <Link to="/" className="logo icon">
            <img
                src="src\assets\icons\logo.svg"
                alt="circuit"
                className="logo__img"
            />
            <h1 className="logo__title">circuit</h1>
        </Link>
    );
}

export default Logo;
