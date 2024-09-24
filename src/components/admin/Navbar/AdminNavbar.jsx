import Logo from "../../Header/Logo/Logo";
import "./index.scss";
function AdminNavbar() {
    return (
        <div className="adminNavbar">
            <Logo />
            <div className="icons">
                <img
                    src="src\assets\icons\search.svg"
                    alt=""
                    className="icon"
                />
                <img src="src\assets\icons\app.svg" alt="" className="icon" />
                <img
                    src="src\assets\icons\expand.svg"
                    alt=""
                    className="icon"
                />
                <div className="notification">
                    <img
                        src="src\assets\icons\notification.svg"
                        alt=""
                        className="icon"
                    />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="src\assets\img\avatar.jpg" alt="" />
                    <span>Jane</span>
                </div>
                <img
                    src="src\assets\icons\setting.svg"
                    alt=""
                    className="icon"
                />{" "}
            </div>
        </div>
    );
}

export default AdminNavbar;
