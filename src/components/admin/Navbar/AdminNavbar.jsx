import { Avatar, Dropdown, Menu } from "antd";
import { tick } from "../../../assets/image";
import Logo from "../../Header/Logo/Logo";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import {
    fetchUserData,
    USER_LOGOUT_SUCCESS,
} from "~/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Wallet from "./Wallet";
function AdminNavbar() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.account.access_token);
    const userInfo = useSelector((state) => state.user.account.userInfo);
    const walletPoint = userInfo.data.walletPoint;

    const navigate = useNavigate();
    useEffect(() => {
        if (accessToken) {
            dispatch(fetchUserData(accessToken));
        }
    }, [accessToken, dispatch]);

    const handleLogOut = () => {
        dispatch(USER_LOGOUT_SUCCESS());
        navigate("/");
    };

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
            <Menu.Item key="7">
                <Link onClick={() => handleLogOut()}>Log out</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="adminNavbar">
            <Logo />
            <Wallet walletPoint={walletPoint} />
            <Dropdown overlay={menu} trigger={["click"]}>
                <div className="icons">
                    <div className="user" style={{ cursor: "pointer" }}>
                        <img src={userInfo?.data?.avatar} alt="" />
                    </div>
                </div>
            </Dropdown>
        </div>
    );
}

export default AdminNavbar;
