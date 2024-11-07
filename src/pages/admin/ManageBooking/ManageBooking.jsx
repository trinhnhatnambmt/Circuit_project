import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    LoadingOutlined,
} from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ManageBooking() {
    const [bookings, setBookings] = useState([]);
    const accessToken = useSelector((state) => state.user.account.access_token);

    const fetchDataBookings = async () => {
        const res = await axios.get("http://167.71.220.5:8080/admin/bookings", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("res", res);
        setBookings(res.data.data);
    };

    useEffect(() => {
        fetchDataBookings();
    }, []);

    const handleAcceptBooking = async (id) => {
        const res = await axios.post(
            `http://167.71.220.5:8080/admin/booking/complete/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        fetchDataBookings();
        toast.success(res.data.message);
    };

    const handleRejectBooking = async (id) => {
        const res = await axios.post(
            `http://167.71.220.5:8080/admin/booking/cancel/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        fetchDataBookings();
        toast.success(res.data.message);
    };

    const columns = [
        {
            title: "Booking Date",
            dataIndex: "date",
            key: "date",
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
                } else if (status === "SUCCESSFUL") {
                    return (
                        <Tag color="green" icon={<CheckCircleOutlined />}>
                            {status}
                        </Tag>
                    );
                } else if (status === "COMPLETED") {
                    return (
                        <Tag color="green" icon={<CheckCircleOutlined />}>
                            {status}
                        </Tag>
                    );
                } else if (status === "DECLINED") {
                    return (
                        <Tag color="red" icon={<CloseCircleOutlined />}>
                            {status}
                        </Tag>
                    );
                } else if (status === "CANCELLED") {
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
                            status === "PROCESSING" ||
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
                            status === "PROCESSING" ||
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
        <div className="manage__user">
            <h1 className="manage__user-title">Manage Booking</h1>
            <Table
                dataSource={bookings}
                columns={columns}
                style={{ marginTop: "30px" }}
            />
        </div>
    );
}

export default ManageBooking;
