import { Link } from "react-router-dom";
import "./Header.scss";
import "../Button/buttons.scss";
import Logo from "./Logo/Logo";
import { avatar, heart, money, search, tick } from "../../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Dropdown, Menu } from "antd";
import {
    fetchUserData,
    USER_LOGOUT_SUCCESS,
} from "../../redux/features/user/userSlice";
import { useEffect } from "react";

function Header() {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.account.access_token);
    const userInfo = useSelector((state) => state.user.account.userInfo);

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchUserData(accessToken));
        }
    }, [accessToken, dispatch]);

    const userRole = userInfo?.data?.role;

    const menu = (
        <Menu style={{ width: "250px" }}>
            <Menu.Item key="0">
                <Avatar
                    size="large"
                    src={userInfo?.data?.avatar}
                    style={{ marginRight: "10px" }}
                />
                <div className="user__info">
                    <h1
                        className="user__info-name"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                    >
                        {userInfo?.data?.name || "User"}
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <p
                            className="user__info-role"
                            style={{ fontSize: "15px", fontWeight: 500 }}
                        >
                            {userInfo?.data?.role || "Guest"}
                        </p>
                        <img src={tick} alt="" />
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Divider />

            {userRole === "MENTOR" && (
                <>
                    <Menu.Item key="2">
                        <Link to="/scheduleManagement">
                            Schedule Management
                        </Link>
                    </Menu.Item>
                    <Menu.Divider />
                </>
            )}
            {userRole === "STUDENT" && (
                <>
                    <Menu.Item key="3">
                        <Link to="/memberManagement">Project Management</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="4">
                        <Link to="/myGroup">My group</Link>
                    </Menu.Item> */}
                    <Menu.Divider />
                </>
            )}

            <Menu.Item key="5">
                <Link to="/writePage">Write Blog</Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link to="/myBlogPage">My Blog</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="7">
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
                                {/* <div className="top-act__group top-act__group--single">
                                    <button className="top-act__btn">
                                        <img
                                            src={search}
                                            alt=""
                                            className="icon top-act__icon"
                                        />
                                    </button>
                                </div> */}

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
                                            src={
                                                userInfo?.data?.avatar || avatar
                                            } // Kiểm tra nếu avatar không có
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
