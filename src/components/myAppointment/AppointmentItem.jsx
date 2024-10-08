// AppointmentItem.js
import { Link } from "react-router-dom";
import { major, mentor } from "../../assets/image";

function AppointmentItem({ appointment, showCancel }) {
    return (
        <article className="cart-item">
            <Link to="">
                <img
                    src={mentor}
                    alt={appointment.name}
                    className="cart-item__thumb"
                />
            </Link>
            <div className="cart-item__content">
                <div className="cart-item__content-left">
                    <h3 className="cart-item__title">
                        <a href="./product-detail.html">{appointment.name}</a>
                    </h3>
                    <p className="cart-item__price-wrap">
                        {appointment.price} |
                        <span
                            className="cart-item__status"
                            style={{ marginLeft: "6px" }}
                        >
                            {appointment.status}
                        </span>
                    </p>
                    <div className="cart-item__ctrl-wrap">
                        <div className="cart-item__ctrl cart-item__ctrl--md-block">
                            <div className="cart-item__input">
                                {appointment.profession}
                                <img className="icon" src={major} alt="major" />
                            </div>
                        </div>
                        <div className="cart-item__info">
                            <div className="cart-item__address">
                                <div className="address__title">Address:</div>
                                <div className="address__desc">
                                    {appointment.address}
                                </div>
                            </div>
                            <div className="cart-item__date">
                                <div className="date__title">Date & Time:</div>
                                <div className="date__desc">
                                    {appointment.date} | {appointment.time}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-item__content-right">
                    <p className="cart-item__total-price">
                        {appointment.price}
                    </p>
                    {showCancel && (
                        <button className="btn myAppointment__btn">
                            Cancel appointment
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}

export default AppointmentItem;
