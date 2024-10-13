import { Link } from "react-router-dom";
import "./Header.scss";
import "../Button/buttons.scss";
import Logo from "./Logo/Logo";
import { avatar, heart, money, search } from "../../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu } from "antd";
import { LogoutOutlined, SmileOutlined } from "@ant-design/icons";
import { USER_LOGOUT_SUCCESS } from "../../redux/features/user/userSlice";

function Header() {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const dispatch = useDispatch();
    // Tạo menu cho dropdown
    const menu = (
        <Menu style={{ width: "250px" }}>
            <Menu.Item key="0">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Divider />

            <Menu.Item key="1">
                <Link to="/writePage">Write Blog</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/myBlogPage">My Blog</Link>
            </Menu.Item>

            <Menu.Divider />
            <Menu.Item key="3">
                <Link onClick={() => dispatch(USER_LOGOUT_SUCCESS())}>
                    Log out
                </Link>
            </Menu.Item>
        </Menu>
    );

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
                                <Link to="/" className="navbar__link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/aboutUs" className="navbar__link">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/mentor" className="navbar__link">
                                    Mentor
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="navbar__link">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="navbar__link">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Action */}
                    <div className="top-act">
                        {isAuthenticated === false ? (
                            <>
                                <Link to="/logIn" className="btn--text">
                                    Log in
                                </Link>

                                <Link to="/signUp" className="btn btn--signUp">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className="top-act__group top-act__group--single">
                                    <button className="top-act__btn">
                                        <img
                                            src={search}
                                            alt=""
                                            className="icon top-act__icon"
                                        />
                                    </button>
                                </div>

                                <div className="top-act__group">
                                    <button className="top-act__btn">
                                        <img
                                            src={heart}
                                            alt=""
                                            className="icon top-act__icon"
                                        />
                                        <span className="top-act__title">
                                            0
                                        </span>
                                    </button>

                                    <div className="top-act__separate"></div>

                                    <button className="top-act__btn">
                                        <img
                                            src={money}
                                            alt=""
                                            className="icon top-act__icon"
                                        />
                                        <span className="top-act__title">
                                            0
                                        </span>
                                    </button>
                                </div>

                                {/* Dropdown Menu */}
                                <Dropdown overlay={menu} trigger={["click"]}>
                                    <div
                                        className="top-act__user"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <img
                                            src={avatar}
                                            alt=""
                                            className="top-act__avatar"
                                        />
                                    </div>
                                </Dropdown>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
