import { Link } from "react-router-dom";
import "./Header.scss";
import "../Button/buttons.scss";
import Logo from "./Logo/Logo";
function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="top-bar">
                    {/* Logo */}
                    <Logo />

                    {/* Navbar */}

                    <nav className="navbar">
                        <ul className="navbar__list">
                            <li>
                                <Link className="navbar__link">Home</Link>
                            </li>
                            <li>
                                <Link className="navbar__link">About us</Link>
                            </li>
                            <li>
                                <Link className="navbar__link">Mentor</Link>
                            </li>
                            <li>
                                <Link className="navbar__link">Pricing</Link>
                            </li>
                            <li>
                                <Link className="navbar__link">Blog</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Action */}
                    <div className="top-act">
                        {/* <div className="top-act__group top-act__group--single">
                            <button className="top-act__btn">
                                <img
                                    src="src\assets\icons\search.svg"
                                    alt=""
                                    className="icon top-act__icon"
                                />
                            </button>
                        </div>

                        <div className="top-act__group">
                            <button className="top-act__btn">
                                <img
                                    src="src\assets\icons\heart.svg"
                                    alt=""
                                    className="icon top-act__icon"
                                />
                                <span className="top-act__title">03</span>
                            </button>

                            <div className="top-act__separate"></div>

                            <button className="top-act__btn">
                                <img
                                    src="src\assets\icons\money.svg"
                                    alt=""
                                    className="icon top-act__icon"
                                />
                                <span className="top-act__title">65.42</span>
                            </button>
                        </div>

                        <div className="top-act__user">
                            <img
                                src="src\assets\img\avatar.jpg"
                                alt=""
                                className="top-act__avatar"
                            />
                        </div> */}

                        <Link to="/logIn" className="btn--text">
                            Log in
                        </Link>

                        <Link to="/signUp" className="btn btn--signUp">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
