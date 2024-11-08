import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import {
    Button,
    Calendar,
    Card,
    Input,
    Modal,
    Space,
    Table,
    Tag,
    theme,
} from "antd";
import { useEffect, useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BookAppointment({ mentorId }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [locations, setLocations] = useState({});
    const [locationNotes, setLocationNotes] = useState({});
    const [loadingState, setLoadingState] = useState({}); // Track loading state for each button
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const accessToken = useSelector((state) => state.user.account.access_token);

    const showModal = () => {
        if (!isAuthenticated) {
            navigate("/login");
        } else setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fetchDataSchedule = async () => {
        const res = await axios.get(
            `http://167.71.220.5:8080/schedule/mentor/${mentorId}`
        );

        setDataSource(res.data.data);
    };

    useEffect(() => {
        fetchDataSchedule();
    }, []);

    const handleBookNow = async (scheduleId) => {
        setLoadingState((prev) => ({ ...prev, [scheduleId]: true })); // Set loading for specific scheduleId

        try {
            const res = await axios.post(
                "http://167.71.220.5:8080/booking/student/create",
                {
                    location: locations[scheduleId] || "",
                    locationNote: locationNotes[scheduleId] || "",
                    scheduleId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(res.data.message);
            fetchDataSchedule();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoadingState((prev) => ({ ...prev, [scheduleId]: false })); // Reset loading after request
        }
    };

    const handleLocationChange = (scheduleId, value) => {
        setLocations((prev) => ({ ...prev, [scheduleId]: value }));
    };

    const handleLocationNoteChange = (scheduleId, value) => {
        setLocationNotes((prev) => ({ ...prev, [scheduleId]: value }));
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
                        {dataSource.map((item, index) => (
                            <Card
                                title={`${item.date}`}
                                key={index}
                                extra={
                                    <Button
                                        type="primary"
                                        loading={loadingState[item.scheduleId]} // Show loading for specific button
                                        onClick={() =>
                                            handleBookNow(item.scheduleId)
                                        }
                                    >
                                        Book now
                                    </Button>
                                }
                                style={{ width: "100%", marginTop: "10px" }}
                            >
                                <p>
                                    <b style={{ marginRight: "10px" }}>
                                        Start Time:
                                    </b>
                                    <Tag color="blue">{`${item.startTime}`}</Tag>
                                </p>
                                <p>
                                    <b style={{ marginRight: "10px" }}>
                                        End Time:
                                    </b>
                                    <Tag
                                        color="orange"
                                        style={{ marginTop: "10px" }}
                                    >{`${item.endTime}`}</Tag>
                                </p>
                                <Input
                                    placeholder="Enter location"
                                    style={{
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                    value={locations[item.scheduleId] || ""}
                                    onChange={(e) =>
                                        handleLocationChange(
                                            item.scheduleId,
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    placeholder="Enter location note"
                                    style={{
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                    value={locationNotes[item.scheduleId] || ""}
                                    onChange={(e) =>
                                        handleLocationNoteChange(
                                            item.scheduleId,
                                            e.target.value
                                        )
                                    }
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default BookAppointment;
