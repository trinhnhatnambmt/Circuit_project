import {
    Table,
    Input,
    Tooltip,
    Select,
    Avatar,
    DatePicker,
    Button,
} from "antd";
import { useEffect, useState } from "react";
import Icon, {
    UserOutlined,
    CalendarOutlined,
    RightOutlined,
    DeleteOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import dayjs from "dayjs"; // Ensure you are using dayjs for date handling
import {
    AlignLeftOutlined,
    CheckOutlined,
    EditOutlined,
    KeyOutlined,
    PlayCircleOutlined,
    UpCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const { Option } = Select;

function MemberManageContent() {
    const [data, setData] = useState([]);

    const [editingSummaryKey, setEditingSummaryKey] = useState("");
    const [editingSummary, setEditingSummary] = useState("");

    const [editingDueDateKey, setEditingDueDateKey] = useState("");
    const [editingDueDate, setEditingDueDate] = useState(dayjs("2024-12-01"));
    const [members, setMembers] = useState([]);

    const isEditingSummary = (record) => record.key === editingSummaryKey;
    const isEditingDueDate = (record) => record.key === editingDueDateKey;

    //Edit summary

    const editSummary = (record) => {
        setEditingSummaryKey(record.key);
        setEditingSummary(record.taskSummary);
    };

    const saveSummary = async (key) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, taskSummary: editingSummary });
            setData(newData);
            await updateSummary(item.taskId);
            setEditingSummaryKey("");
        }
    };

    //Edit date

    const editDate = (record) => {
        setEditingDueDateKey(record.key);
        setEditingDueDate(dayjs(record.dueDate)); // Ensure using dayjs here
    };

    const saveDate = async (key) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1 && editingDueDate.isValid()) {
            // Check if date is valid with dayjs
            const item = newData[index];
            newData.splice(index, 1, {
                ...item,
                dueDate: editingDueDate.format("YYYY-MM-DD"), // Use dayjs.format() instead of date-fns
            });
            setData(newData);
            await updateDueDateTask(item.taskId);
            setEditingDueDateKey("");
        }
    };

    const handleStatusChange = async (key, value) => {
        console.log("Changing status for key:", key, "to", value);
        const newData = data.map((item) =>
            item.key === key ? { ...item, status: value } : item
        );
        const index = newData.findIndex((item) => key === item.key);
        const item = newData[index];

        setData(newData);
        await updateStatus(item.taskId, value);
    };

    const handlePriorityChange = async (key, value) => {
        const newData = data.map((item) =>
            item.key === key ? { ...item, status: value } : item
        );
        const index = newData.findIndex((item) => key === item.key);
        const item = newData[index];

        setData(newData);

        await updatePriority(item.taskId, value);
    };

    const handleAssigneeChange = (key, value) => {
        const newData = data.map((item) =>
            item.key === key ? { ...item, assignee: value } : item
        );
        setData(newData);
    };

    const assignees = [
        {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            name: "Jane Smith",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            name: "Alice Johnson",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
            name: "Bob Brown",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
    ];

    const columns = [
        {
            title: (
                <>
                    <Icon component={KeyOutlined} /> Key
                </>
            ),
            dataIndex: "taskKey",
            width: "5%",
        },
        {
            title: (
                <>
                    <Icon component={AlignLeftOutlined} /> Summary
                </>
            ),
            dataIndex: "taskSummary",
            key: "taskSummary",
            width: "25%",
            render: (_, record) => {
                const editable = isEditingSummary(record);
                return editable ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Input
                            value={editingSummary}
                            onChange={(e) => setEditingSummary(e.target.value)}
                            style={{ marginRight: 8 }}
                        />
                        <Tooltip title="Done">
                            <CheckOutlined
                                onClick={() => saveSummary(record.key)}
                                style={{ color: "green", cursor: "pointer" }}
                            />
                        </Tooltip>
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {record.taskSummary}
                        <EditOutlined
                            onClick={() => editSummary(record)}
                            style={{
                                marginLeft: 8,
                                cursor: "pointer",
                            }}
                        />
                    </div>
                );
            },
        },
        {
            title: (
                <>
                    <PlayCircleOutlined /> Status
                </>
            ),
            dataIndex: "taskStatus",
            width: "10%",
            render: (_, record) => (
                <Select
                    value={record.taskStatus}
                    onChange={(value) => handleStatusChange(record.key, value)}
                >
                    <Option value="TO_DO">
                        <p style={{ color: "blue", fontWeight: "600" }}>
                            TO DO
                        </p>
                    </Option>
                    <Option value="IN_PROGRESS">
                        <p style={{ color: "orange", fontWeight: "600" }}>
                            IN PROGRESS
                        </p>
                    </Option>
                    <Option value="DONE">
                        <p style={{ color: "green", fontWeight: "600" }}>
                            DONE
                        </p>
                    </Option>
                </Select>
            ),
        },
        {
            title: (
                <>
                    <UserOutlined /> Assignee
                </>
            ),
            dataIndex: "assigneeName",
            width: "20%",
            render: (_, record) => (
                <Select
                    value={record.assigneeName}
                    onChange={(value) =>
                        handleAssigneeChange(record.key, value)
                    }
                    style={{ width: "100%" }}
                >
                    {members.map((assignee, index) => (
                        <Option key={index} value={assignee.accountName}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    src={assignee.accountAvatar}
                                    size="small"
                                    style={{ marginRight: 8 }}
                                />
                                {assignee.accountName}
                            </div>
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: (
                <>
                    <CalendarOutlined /> Due date
                </>
            ),
            dataIndex: "dueDate",
            width: "15%",
            render: (_, record) => {
                const editable = isEditingDueDate(record);
                return editable ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <DatePicker
                            value={editingDueDate}
                            onChange={(date) => setEditingDueDate(date)}
                            format="YYYY-MM-DD"
                            style={{ marginRight: 8 }}
                        />
                        <Tooltip title="Confirm">
                            <CheckOutlined
                                onClick={() => saveDate(record.key)}
                                style={{ color: "green", cursor: "pointer" }}
                            />
                        </Tooltip>
                        <Tooltip title="Cancel">
                            <CloseOutlined
                                style={{
                                    color: "red",
                                    cursor: "pointer",
                                    marginLeft: "5px",
                                }}
                                onClick={() => setEditingDueDateKey("")}
                            />
                        </Tooltip>
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {dayjs(record.dueDate).format("YYYY-MM-DD")}
                        <EditOutlined
                            onClick={() => editDate(record)}
                            style={{ marginLeft: 8, cursor: "pointer" }}
                        />
                    </div>
                );
            },
        },
        {
            title: (
                <>
                    <Icon component={UpCircleOutlined} /> Priority
                </>
            ),
            dataIndex: "taskPriority",
            width: "10%",
            render: (_, record) => (
                <Select
                    value={record.taskPriority}
                    onChange={(value) =>
                        handlePriorityChange(record.key, value)
                    }
                >
                    <Option value="Low">Low</Option>
                    <Option value="Medium">Medium</Option>
                    <Option value="High">High</Option>
                </Select>
            ),
        },
        {
            title: (
                <>
                    <RightOutlined /> Action
                </>
            ),
            dataIndex: "priority",
            render: (_, record) => (
                <Button danger onClick={() => handleDeleteTask(record.taskId)}>
                    <DeleteOutlined />
                </Button>
            ),
        },
    ];

    const accessToken = useSelector((state) => state.user.account.access_token);

    const fetchDataTask = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/project-progress/my-group/task",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        setData(
            res.data.data.taskList.map((item, index) => ({
                ...item,
                key: index,
            }))
        );
    };

    const fetchDataMember = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/project-progress/my-group/task",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        setMembers(res.data.data.studentList);
    };

    useEffect(() => {
        fetchDataTask();
        fetchDataMember();
    }, []);

    const updateDueDateTask = async (taskId) => {
        const payload = editingDueDate.format("YYYY-MM-DD");
        await axios.put(
            `http://167.71.220.5:8080/project-progress/task/update/due-date/${taskId}`,
            {
                dueDate: payload,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
    };

    const updateSummary = async (taskId) => {
        await axios.put(
            `http://167.71.220.5:8080/project-progress/task/update/summary/${taskId}`,
            {
                summary: editingSummary,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
    };

    const updateStatus = async (taskId, value) => {
        const res = await axios.put(
            `http://167.71.220.5:8080/project-progress/task/update/status/${taskId}`,
            {
                taskStatus: value,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        toast.success(res.data.message);
        fetchDataTask();
    };

    const updatePriority = async (taskId, value) => {
        const res = await axios.put(
            `http://167.71.220.5:8080/project-progress/task/update/priority/${taskId}`,
            value,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("rés", res);
        toast.success(res.data.message);
        fetchDataTask();
    };

    const handleDeleteTask = async (taskId) => {
        const res = await axios.delete(
            `http://167.71.220.5:8080/project-progress/task/delete/${taskId}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        toast.success(res.data.message);
        fetchDataTask();
    };
    return (
        <div className="boardContent">
            <Table
                columns={columns}
                dataSource={data}
                bordered
                rowClassName="editable-row"
                pagination={false}
            />
        </div>
    );
}

export default MemberManageContent;
