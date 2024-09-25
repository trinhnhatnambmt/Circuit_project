import {
  avatar,
  expand,
  notification,
  search,
  setting,
} from "../../../assets/image";
import Logo from "../../Header/Logo/Logo";
import "./index.scss";
function AdminNavbar() {
  return (
    <div className="adminNavbar">
      <Logo />
      <div className="icons">
        <img src={search} alt="" className="icon" />
        <img src="src\assets\icons\app.svg" alt="" className="icon" />
        <img src={expand} alt="" className="icon" />
        <div className="notification">
          <img src={notification} alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={avatar} alt="" />
          <span>Jane</span>
        </div>
        <img src={setting} alt="" className="icon" />{" "}
      </div>
    </div>
  );
}

export default AdminNavbar;
