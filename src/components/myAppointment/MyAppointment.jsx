import { Link } from "react-router-dom";
import "./index.scss";
import { heart, major, mentor, trash } from "../../assets/image";
function MyAppointment() {
    return (
        <div className="cart-info">
            <h2
                className="cart-info__heading"
                style={{
                    borderBottom: "1px solid #d2d1d6",
                    paddingBottom: "10px",
                }}
            >
                My appointments
            </h2>
            <div className="cart-info__list">
                {/* Cart item 1 */}
                <article className="cart-item">
                    <Link to="">
                        <img src={mentor} alt className="cart-item__thumb" />
                    </Link>
                    <div className="cart-item__content">
                        <div className="cart-item__content-left">
                            <h3 className="cart-item__title">
                                <a href="./product-detail.html">
                                    Trinh Nhat Huy
                                </a>
                            </h3>
                            <p className="cart-item__price-wrap">
                                $47.00 |
                                <span
                                    className="cart-item__status"
                                    style={{ marginLeft: "6px" }}
                                >
                                    Available
                                </span>
                            </p>
                            <div className="cart-item__ctrl-wrap">
                                <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                    <div className="cart-item__input">
                                        Software Engineer
                                        <img className="icon" src={major} alt />
                                    </div>
                                </div>
                                <div className="cart-item__info">
                                    <div className="cart-item__address">
                                        <div className="address__title">
                                            Address:
                                        </div>
                                        <div className="address__desc">
                                            27th Cross, Richmond Circle, Ring
                                            Road, London
                                        </div>
                                    </div>
                                    <div className="cart-item__date">
                                        <div className="date__title">
                                            Date & Time:
                                        </div>
                                        <div className="date__desc">
                                            7 Nov 2024 | 07:30 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item__content-right">
                            <p className="cart-item__total-price">$47.00</p>
                            <button className="btn myAppointment__btn">
                                Cancel appointment
                            </button>
                        </div>
                    </div>
                </article>
                <article className="cart-item">
                    <Link to="">
                        <img src={mentor} alt className="cart-item__thumb" />
                    </Link>
                    <div className="cart-item__content">
                        <div className="cart-item__content-left">
                            <h3 className="cart-item__title">
                                <a href="./product-detail.html">
                                    Trinh Nhat Huy
                                </a>
                            </h3>
                            <p className="cart-item__price-wrap">
                                $47.00 |
                                <span
                                    className="cart-item__status"
                                    style={{ marginLeft: "6px" }}
                                >
                                    Available
                                </span>
                            </p>
                            <div className="cart-item__ctrl-wrap">
                                <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                    <div className="cart-item__input">
                                        Software Engineer
                                        <img className="icon" src={major} alt />
                                    </div>
                                </div>
                                <div className="cart-item__info">
                                    <div className="cart-item__address">
                                        <div className="address__title">
                                            Address:
                                        </div>
                                        <div className="address__desc">
                                            27th Cross, Richmond Circle, Ring
                                            Road, London
                                        </div>
                                    </div>
                                    <div className="cart-item__date">
                                        <div className="date__title">
                                            Date & Time:
                                        </div>
                                        <div className="date__desc">
                                            7 Nov 2024 | 07:30 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item__content-right">
                            <p className="cart-item__total-price">$47.00</p>
                            <button className="btn myAppointment__btn">
                                Cancel appointment
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default MyAppointment;
