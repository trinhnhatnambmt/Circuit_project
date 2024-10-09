import { Link } from "react-router-dom";
import {
    avatar,
    feedBack,
    heart,
    help,
    myOrder,
    personal_info,
    shield,
    tofu,
} from "../../assets/image";
import "./index.scss";
function Sidebar({ setActiveComponent }) {
    return (
        <div className="profile">
            <aside className="profile__sidebar">
                {/* User */}
                <div className="profile-user">
                    <img src={avatar} alt className="profile-user__avatar" />
                    <h1 className="profile-user__name">Imran Khan</h1>
                    <p className="profile-user__desc">
                        Registered: 17th May 2022
                    </p>
                </div>
                {/* Menu 1 */}
                <div className="profile-menu">
                    <h3 className="profile-menu__title">Manage Account</h3>
                    <ul className="profile-menu__list">
                        <li onClick={() => setActiveComponent("PersonalInfo")}>
                            <Link className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img
                                        src={personal_info}
                                        alt
                                        className="icon"
                                    />
                                </span>
                                Personal info
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Menu 2 */}
                <div className="profile-menu">
                    <h3 className="profile-menu__title">My items</h3>
                    <ul className="profile-menu__list">
                        <li onClick={() => setActiveComponent("MyAppointment")}>
                            <Link href="#!" className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img src={myOrder} alt className="icon" />
                                </span>
                                My Appointment
                            </Link>
                        </li>
                        <li onClick={() => setActiveComponent("MyFavourite")}>
                            <Link className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img src={heart} alt className="icon" />
                                </span>
                                My Favourite
                            </Link>
                        </li>
                        {/* <li>
                            <a href="#!" className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img src={feedBack} alt className="icon" />
                                </span>
                                My Feedback
                            </a>
                        </li> */}
                    </ul>
                </div>
                {/* Menu 3 */}
                <div className="profile-menu">
                    <h3 className="profile-menu__title">
                        Subscriptions &amp; plans
                    </h3>
                    <ul className="profile-menu__list">
                        <li>
                            <a href="#!" className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img src={shield} alt className="icon" />
                                </span>
                                Protection plans
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Menu 4 */}
                <div className="profile-menu">
                    <h3 className="profile-menu__title">Customer Service</h3>
                    <ul className="profile-menu__list">
                        <li>
                            <a href="#!" className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img src={help} alt className="icon" />
                                </span>
                                Help
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="profile-menu__link">
                                <span className="profile-menu__icon">
                                    <img src={tofu} alt className="icon" />
                                </span>
                                Terms of Use
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;