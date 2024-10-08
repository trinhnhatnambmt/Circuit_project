import { Link } from "react-router-dom";
import "./index.scss";
import { major, mentor } from "../../assets/image";
import { Tabs } from "antd";
import { useState } from "react";
import AppointmentItem from "./AppointmentItem";
import { expiredAppointments, upcomingAppointments } from "./AppointmentData";

function MyAppointment() {
    const [activeTab, setActiveTab] = useState("1");

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
                        label: "Upcoming",
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
                        label: "Finished",
                        key: "2",
                        children: expiredAppointments.map((appointment) => (
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
