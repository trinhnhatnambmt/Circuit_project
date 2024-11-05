import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function MySchedule() {
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [dataSource, setDataSource] = useState([]);

    const handleDeleteSchedule = async (id) => {
        const res = await axios.delete(
            `http://167.71.220.5:8080/mentor/schedule/delete/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        toast.success(res.data.message);
        fetchDataSchedule();
    };

    const columns = [
        {
            title: "My Date",
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
            title: "Action",
            dataIndex: "scheduleId",
            key: "scheduleId",
            render: (scheduleId) => (
                <Space>
                    <Button
                        type="primary"
                        danger
                        icon={<CloseCircleOutlined />}
                        onClick={() => handleDeleteSchedule(scheduleId)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    const fetchDataSchedule = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/mentor/schedule/get/active",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        setDataSource(res.data.data);
    };

    useEffect(() => {
        fetchDataSchedule();
    }, []);
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
                My Schedule
            </h2>
            <Table
                dataSource={dataSource}
                columns={columns}
                style={{ marginTop: "30px" }}
            />
        </div>
    );
}

export default MySchedule;
