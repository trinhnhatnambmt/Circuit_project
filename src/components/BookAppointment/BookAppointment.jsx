import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Calendar, Modal, theme } from "antd";
import { useEffect, useState } from "react";
import "./index.scss";
function BookAppointment() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timeSlot, setTimeSlot] = useState([]);

    useEffect(() => {
        getTime();
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { token } = theme.useToken();
    const wrapperStyle = {
        width: "100%",
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    const getTime = () => {
        const timeList = [];
        for (let i = 7; i <= 11; i++) {
            timeList.push({
                time: i + ":00 AM",
            });
            timeList.push({
                time: i + ":30 AM",
            });
        }
        for (let i = 1; i <= 10; i++) {
            timeList.push({
                time: i + ":00 PM",
            });
            timeList.push({
                time: i + ":30 PM",
            });
        }

        setTimeSlot(timeList);
    };
    return (
        <div>
            <button
                className="btn"
                style={{
                    marginTop: "30px",
                    fontSize: "14px",
                    borderRadius: "9999px",
                    width: "250px",
                    height: "44px",
                }}
                onClick={showModal}
            >
                Book appointment
            </button>
            <Modal
                title="Book Appointment"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <div>
                    <div className="book-appointment">
                        {/* Calendar */}
                        <div className="calendar">
                            <h1
                                style={{
                                    fontSize: "17px",
                                    marginBottom: "10px",
                                }}
                            >
                                <CalendarOutlined
                                    style={{ marginRight: "10px" }}
                                />
                                Select Date
                            </h1>
                            <div style={wrapperStyle}>
                                <Calendar fullscreen={false} />
                            </div>
                        </div>
                        {/* Time Slot */}
                        <div className="time__slot">
                            <h1
                                style={{
                                    fontSize: "17px",
                                    marginBottom: "10px",
                                }}
                            >
                                <ClockCircleOutlined
                                    style={{ marginRight: "10px" }}
                                />
                                Select time slot
                            </h1>
                            <div className="time__slot-item">
                                {timeSlot.map((item, index) => (
                                    <h2 key={index}>{item.time}</h2>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default BookAppointment;
