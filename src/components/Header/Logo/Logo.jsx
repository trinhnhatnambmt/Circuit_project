import { Link } from "react-router-dom";
import "./Logo.scss";
import { logo } from "../../../assets/image";
function Logo() {
  return (
    <Link to="/" className="logo icon">
      <img src={logo} alt="circuit" className="logo__img" />
      <h1 className="logo__title">circuit</h1>
    </Link>
  );
}

export default Logo;
