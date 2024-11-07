import "./index.scss";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import AppointmentItem from "./AppointmentItem";
import axios from "axios";
import { useSelector } from "react-redux";

function MyAppointment() {
    const [activeTab, setActiveTab] = useState("1");
    const [appointments, setAppointments] = useState([]);
    const accessToken = useSelector((state) => state.user.account.access_token);

    const fetchDataAppointment = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/booking/student/view-upcoming",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        console.log("res", res.data.data);
        setAppointments(res.data.data);
    };

    useEffect(() => {
        fetchDataAppointment();

        // Thiết lập Polling mỗi 10 giây
        const intervalId = setInterval(() => {
            fetchDataAppointment();
        }, 10000);

        // Xóa interval khi component bị unmount
        return () => clearInterval(intervalId);
    }, []);

    const upcomingAppointments = appointments.filter(
        (appointment) => appointment.bookingStatus === "PROCESSING"
    );

    const finishedAppointments = appointments.filter(
        (appointment) => appointment.bookingStatus === "SUCCESSFUL"
    );
    const rejectAppointments = appointments.filter(
        (appointment) => appointment.bookingStatus === "DECLINED"
    );

    return (
        <div className="cart-info">
            <h2
                className="cart-info__heading"
                style={{
                    borderBottom: "1px solid #d2d1d6",
                    paddingBottom: "10px",
                    marginBottom: "20px",
                }}
            >
                My appointments
            </h2>

            <Tabs
                type="card"
                activeKey={activeTab}
                onChange={(key) => setActiveTab(key)}
                items={[
                    {
                        label: (
                            <span
                                style={{
                                    color: "", // Màu sắc cho tab "Upcoming"
                                }}
                            >
                                Upcoming
                            </span>
                        ),
                        key: "1",
                        children: upcomingAppointments.map((appointment) => (
                            <AppointmentItem
                                key={appointment.id}
                                appointment={appointment}
                                showCancel={true} // Hiển thị nút Cancel trong tab Upcoming
                            />
                        )),
                    },
                    {
                        label: (
                            <span
                                style={{
                                    color: "green", // Màu sắc cho tab "Upcoming"
                                }}
                            >
                                Finished
                            </span>
                        ),
                        key: "2",
                        children: finishedAppointments.map((appointment) => (
                            <AppointmentItem
                                key={appointment.id}
                                appointment={appointment}
                                showCancel={false} // Không hiển thị nút Cancel trong tab Expired
                            />
                        )),
                    },
                    {
                        label: (
                            <span
                                style={{
                                    color: "red", // Màu sắc cho tab "Upcoming"
                                }}
                            >
                                Declined
                            </span>
                        ),
                        key: "3",
                        children: rejectAppointments.map((appointment) => (
                            <AppointmentItem
                                key={appointment.id}
                                appointment={appointment}
                                showCancel={false} // Không hiển thị nút Cancel trong tab Expired
                            />
                        )),
                    },
                ]}
            />
        </div>
    );
}

export default MyAppointment;
