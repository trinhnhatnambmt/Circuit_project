import { Link } from "react-router-dom";
import "./index.scss";
import { menu } from "../data";
function AdminMenu() {
    return (
        <div className="adminMenu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <Link
                            to="/admin"
                            className="listItem"
                            key={listItem.id}
                        >
                            <img src={listItem.icon} alt="" className="icon" />
                            <span className="listItemTitle">
                                {listItem.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AdminMenu;
