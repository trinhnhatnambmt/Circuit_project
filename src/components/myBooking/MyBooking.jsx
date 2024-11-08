import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, Space, Table, Tag } from "antd";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
function MyBooking() {
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [bookings, setBookings] = useState([]);

    const fetchDataBooking = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/mentor/booking/view",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        setBookings(res.data.data);
    };

    useEffect(() => {
        fetchDataBooking();
    }, []);

    const handleAcceptBooking = async (id) => {
        const res = await axios.post(
            `http://167.71.220.5:8080/mentor/booking/approve/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        toast.success(res.data.message);
        fetchDataBooking();
    };

    const handleRejectBooking = async (id) => {
        const res = await axios.post(
            `http://167.71.220.5:8080/mentor/booking/reject/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        toast.success(res.data.message);
        fetchDataBooking();
    };

    const columns = [
        {
            title: "Booking Date",
            dataIndex: "bookingDate",
            key: "bookingDate",
        },

        {
            title: "Started time",
            dataIndex: "startTime",
            key: "startTime",
            render: (startTime) => <Tag color="blue">{startTime}</Tag>,
        },
        {
            title: "Ended time",
            dataIndex: "endTime",
            key: "endTime",
            render: (endTime) => <Tag color="orange">{endTime}</Tag>,
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                if (status === "PROCESSING") {
                    return (
                        <Tag color="blue" icon={<LoadingOutlined spin />}>
                            {status}
                        </Tag>
                    );
                } else if (status === "SUCCESSFUL" || status === "COMPLETED") {
                    return (
                        <Tag color="green" icon={<CheckCircleOutlined />}>
                            {status}
                        </Tag>
                    );
                } else if (status === "DECLINED" || status === "CANCELLED") {
                    return (
                        <Tag color="red" icon={<CloseCircleOutlined />}>
                            {status}
                        </Tag>
                    );
                }
                return <Tag>{status}</Tag>;
            },
        },
        {
            title: "Action",
            dataIndex: "status",
            key: "action",
            render: (status, record) => (
                <Space>
                    <Button
                        type=""
                        icon={<CheckCircleOutlined />}
                        disabled={
                            status === "SUCCESSFUL" ||
                            status === "DECLINED" ||
                            status === "COMPLETED" ||
                            status === "CANCELLED"
                        }
                        onClick={() => handleAcceptBooking(record.bookingId)}
                    >
                        Accept
                    </Button>
                    <Button
                        type="primary"
                        danger
                        icon={<CloseCircleOutlined />}
                        disabled={
                            status === "SUCCESSFUL" ||
                            status === "DECLINED" ||
                            status === "COMPLETED" ||
                            status === "CANCELLED"
                        }
                        onClick={() => handleRejectBooking(record.bookingId)}
                    >
                        Reject
                    </Button>
                </Space>
            ),
        },
    ];
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
                My Booking
            </h2>
            <Table
                dataSource={bookings}
                columns={columns}
                style={{ marginTop: "30px" }}
            />
        </div>
    );
}

export default MyBooking;
