import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { menu } from "../data";
function AdminMenu() {
    return (
        <div className="adminMenu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <NavLink
                            to={listItem.url}
                            className="listItem"
                            key={listItem.id}
                        >
                            <img src={listItem.icon} alt="" className="icon" />
                            <span className="listItemTitle">
                                {listItem.title}
                            </span>
                        </NavLink>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AdminMenu;
