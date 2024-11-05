import { Alert, Button, Calendar, Drawer, TimePicker } from "antd";
import "./index.scss";
import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

function ScheduleManagement() {
    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());
    const [time, setTime] = useState([dayjs(), dayjs().add(2, "hour")]); // Mặc định khoảng cách 2 giờ
    const [formattedDateStarTime, setFormattedDateStarTime] = useState(""); // State for formatted start time
    const [formattedDateEndTime, setFormattedDateEndTime] = useState(""); // State for formatted end time
    const accessToken = useSelector((state) => state.user.account.access_token);

    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };

    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const handleTimeChange = (newTime) => {
        if (newTime && newTime.length === 2) {
            setTime(newTime);

            const [startTime, endTime] = newTime;

            const selectedDateStartTime = dayjs(selectedValue)
                .hour(startTime.hour())
                .minute(startTime.minute());
            const formattedStart = selectedDateStartTime.format("HH:mm:ss");

            const selectedDateEndTime = dayjs(selectedValue)
                .hour(endTime.hour())
                .minute(endTime.minute());
            const formattedEnd = selectedDateEndTime.format("HH:mm:ss");

            setFormattedDateStarTime(formattedStart);
            setFormattedDateEndTime(formattedEnd);
        }
    };

    const handleSubmit = async () => {
        // console.log(
        //     `You selected date: ${selectedValue?.format("YYYY-MM-DD")}`
        // );

        // console.log("Selected Start DateTime:", formattedDateStarTime);
        // console.log("Selected End DateTime:", formattedDateEndTime);
        const res = await axios.post(
            "http://167.71.220.5:8080/mentor/schedule/create",
            {
                date: `${selectedValue?.format("YYYY-MM-DD")}`,
                startFrom: formattedDateStarTime,
                endAt: formattedDateEndTime,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        toast.success(res.data.message);
        setValue(dayjs());
        setSelectedValue(dayjs());
        setTime([dayjs(), dayjs().add(2, "hour")]);
        setFormattedDateStarTime("");
        setFormattedDateEndTime("");
    };

    // Hàm để disable các giờ và phút cho endTime, đảm bảo cách ít nhất 2 giờ
    const disabledEndTime = (selectedStartTime) => {
        if (!selectedStartTime) return {};

        const startHour = selectedStartTime.hour();
        const startMinute = selectedStartTime.minute();

        return {
            disabledHours: () => {
                const hours = Array.from({ length: 24 }, (_, i) => i).filter(
                    (hour) => hour <= startHour || hour < startHour + 2
                );
                return hours;
            },
            disabledMinutes: (selectedHour) => {
                if (selectedHour === startHour) {
                    return Array.from({ length: 60 }, (_, i) => i).filter(
                        (minute) => minute <= startMinute
                    );
                }
                return [];
            },
        };
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
                        <Alert
                            message={`Choose your free time on ${selectedValue?.format(
                                "YYYY-MM-DD"
                            )}`}
                            type="info"
                            showIcon
                        />
                        <TimePicker.RangePicker
                            style={{ width: "100%", marginTop: "10px" }}
                            format="HH:mm"
                            value={time}
                            onChange={handleTimeChange}
                            minuteStep={30} // Chỉ cho phép chọn phút là 00 hoặc 30
                            disabledTime={(_, type) =>
                                type === "end" ? disabledEndTime(time[0]) : {}
                            } // Disable các giờ và phút cho endTime
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
