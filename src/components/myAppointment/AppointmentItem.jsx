// AppointmentItem.js
import { Link } from "react-router-dom";
import { major, mentor } from "../../assets/image";

function AppointmentItem({ appointment, showCancel }) {
    return (
        <article className="cart-item">
            <Link to="">
                <img
                    src={appointment.mentorAvatar}
                    alt={appointment.mentorName}
                    className="cart-item__thumb"
                />
            </Link>
            <div className="cart-item__content">
                <div className="cart-item__content-left">
                    <h3 className="cart-item__title">
                        <a href="./product-detail.html">
                            {appointment.mentorName}
                        </a>
                    </h3>
                    <p className="cart-item__price-wrap">
                        {appointment.price} |
                        <span
                            className="cart-item__status"
                            style={{ marginLeft: "6px" }}
                        >
                            {appointment.bookingStatus}
                        </span>
                    </p>
                    <div className="cart-item__ctrl-wrap">
                        <div className="cart-item__ctrl cart-item__ctrl--md-block">
                            <div className="cart-item__input">
                                {appointment.mentorSpecializations}
                                <img className="icon" src={major} alt="major" />
                            </div>
                        </div>
                        <div className="cart-item__info">
                            <div className="cart-item__address">
                                <div className="address__title">Address:</div>
                                <div className="address__desc">
                                    {appointment.location}
                                </div>
                            </div>
                            <div className="cart-item__date">
                                <div className="date__title">Date:</div>
                                <div className="date__desc">
                                    {appointment.bookingDate}
                                </div>
                            </div>
                            <div className="cart-item__date">
                                <div className="date__title">Start Time:</div>
                                <div className="date__desc">
                                    {appointment.startTime}
                                </div>
                                <div className="date__title">End Time:</div>
                                <div className="date__desc">
                                    {appointment.endTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-item__content-right">
                    <p className="cart-item__total-price">
                        {appointment.mentorPrice} VND
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
