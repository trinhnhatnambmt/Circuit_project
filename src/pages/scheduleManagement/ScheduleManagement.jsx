import { Alert, Button, Calendar, TimePicker } from "antd";
import "./index.scss";
import { useState } from "react";
import dayjs from "dayjs";
function ScheduleManagement() {
    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());
    const [time, setTime] = useState(dayjs());

    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    const handleSubmit = () => {
        // Kết hợp ngày đã chọn và thời gian đã chọn
        const selectedDateTime = dayjs(selectedValue)
            .hour(time.hour())
            .minute(time.minute());
        const formattedDateTime = selectedDateTime.format("YYYY-MM-DD'T'HH:mm");
        console.log("Selected DateTime:", formattedDateTime);
        // Gửi formattedDateTime tới backend tại đây
    };
    return (
        <div className="schedule__management">
            <div className="container">
                <h2
                    className="cart-info__heading"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "10px",
                        marginBottom: "20px",
                    }}
                >
                    Schedule Management
                </h2>
                <div className="schedule__management-inner">
                    <div className="calender" style={{ width: "50%" }}>
                        <Alert
                            message={`You selected date: ${selectedValue?.format(
                                "YYYY-MM-DD"
                            )}`}
                            type="success"
                        />
                        <Calendar
                            value={value}
                            onSelect={onSelect}
                            onPanelChange={onPanelChange}
                        />
                    </div>
                    <div className="time" style={{ width: "50%" }}>
                        <TimePicker
                            value={time}
                            onChange={handleTimeChange}
                            format="HH:mm"
                            style={{ width: "100%" }}
                        />
                        <Button
                            type="primary"
                            onClick={handleSubmit}
                            style={{
                                marginTop: "10px",
                                backgroundColor: "#b5ed3d",
                                color: "#032e32",
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleManagement;
