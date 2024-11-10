// AppointmentItem.js
import { Link } from "react-router-dom";
import { major, mentor } from "../../assets/image";
import { Button, Tag } from "antd";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

function AppointmentItem({ appointment, showCancel, fetchDataAppointment }) {
    const [loading, setLoading] = useState(false);
    const accessToken = useSelector((state) => state.user.account.access_token);
    const getStatusTagColor = (status) => {
        switch (status) {
            case "DECLINED":
                return "red";
            case "SUCCESSFUL":
                return "green";
            default:
                return "blue";
        }
    };

    const cancelAppointment = async (bookingId) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `http://167.71.220.5:8080/account/booking/cancel/${bookingId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            console.log("Check cancel:", response);
            // Xử lý phản hồi từ API nếu cần
            toast.success(response.data.message);
            fetchDataAppointment();
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
        }
    };

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
                        <Tag
                            color={getStatusTagColor(appointment.bookingStatus)} // Sử dụng màu theo trạng thái
                            style={{ marginLeft: "6px" }}
                        >
                            {appointment.bookingStatus}
                        </Tag>
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
                        <Button
                            danger
                            type="primary"
                            loading={loading}
                            onClick={() =>
                                cancelAppointment(appointment.bookingId)
                            }
                        >
                            Cancel appointment
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}

export default AppointmentItem;
