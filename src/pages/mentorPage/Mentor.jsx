import { Link } from "react-router-dom";
import { avatar, heart, mentor, mentor__icon, tick } from "../../assets/image";
import "./index.scss";
import ButtonLike from "../../components/Button/ButtonLike";
function Mentor() {
    return (
        <div className="mentor__page">
            <div className="container">
                <div className="mentor__page-inner">
                    <div className="mentor__page-title">Our mentor</div>
                    <div className="mentor__page-group">
                        <div className="mentor__page-item">
                            <Link to="/mentorDetail">
                                {" "}
                                <img
                                    src={avatar}
                                    alt=""
                                    className="mentor__img"
                                />
                            </Link>
                            <button className="mentor__page-liked">
                                <ButtonLike />
                            </button>
                            <div className="mentor__info">
                                <div className="mentor__major">
                                    Software Engineer
                                </div>
                                <div className="mentor__name">
                                    <Link to="/mentorDetail" className="name">
                                        Shireen Sungkar
                                    </Link>
                                    <img
                                        src={tick}
                                        alt=""
                                        className="tick"
                                        style={{ marginTop: "5px" }}
                                    />
                                </div>
                                <div className="mentor__email">
                                    <img
                                        src={mentor__icon}
                                        alt=""
                                        className="mentor__email-icon"
                                    />
                                    <p className="email">haha@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentor;
