import {
    Table,
    Input,
    Tooltip,
    Select,
    Avatar,
    DatePicker,
    Button,
} from "antd";
import { useState } from "react";
import Icon, {
    UserOutlined,
    CalendarOutlined,
    RightOutlined,
    DeleteOutlined,
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

const { Option } = Select;

function MemberManageContent() {
    const [data, setData] = useState([
        {
            key: "1",
            taskKey: "T001",
            taskSummary: "Complete the project documentation",
            status: "IN_PROGRESS",
            assignee: "John Doe",
            dueDate: "2024-12-01",
            priority: "High",
        },
        {
            key: "2",
            taskKey: "T002",
            taskSummary: "Design the landing page",
            status: "TO_DO",
            assignee: "Jane Smith",
            dueDate: "2024-12-10",
            priority: "Medium",
        },
        {
            key: "3",
            taskKey: "T003",
            taskSummary: "Implement user authentication",
            status: "DONE",
            assignee: "Alice Johnson",
            dueDate: "2024-11-20",
            priority: "Low",
        },
    ]);

    const [editingSummaryKey, setEditingSummaryKey] = useState("");
    const [editingSummary, setEditingSummary] = useState("");

    const [editingDueDateKey, setEditingDueDateKey] = useState("");
    const [editingDueDate, setEditingDueDate] = useState(dayjs("2024-12-01"));

    const isEditingSummary = (record) => record.key === editingSummaryKey;
    const isEditingDueDate = (record) => record.key === editingDueDateKey;

    const editSummary = (record) => {
        setEditingSummaryKey(record.key);
        setEditingSummary(record.taskSummary);
    };

    const saveSummary = (key) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, taskSummary: editingSummary });
            setData(newData);
            setEditingSummaryKey("");
        }
    };

    const handleStatusChange = (key, value) => {
        const newData = data.map((item) =>
            item.key === key ? { ...item, status: value } : item
        );
        setData(newData);
    };

    const handleAssigneeChange = (key, value) => {
        const newData = data.map((item) =>
            item.key === key ? { ...item, assignee: value } : item
        );
        setData(newData);
    };

    const editDate = (record) => {
        setEditingDueDateKey(record.key);
        setEditingDueDate(dayjs(record.dueDate)); // Ensure using dayjs here
    };

    const saveDate = (key) => {
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
            setEditingDueDateKey("");
        }
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
            dataIndex: "status",
            width: "10%",
            render: (_, record) => (
                <Select
                    value={record.status}
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
            dataIndex: "assignee",
            width: "20%",
            render: (_, record) => (
                <Select
                    value={record.assignee}
                    onChange={(value) =>
                        handleAssigneeChange(record.key, value)
                    }
                    style={{ width: "100%" }}
                >
                    {assignees.map((assignee) => (
                        <Option key={assignee.name} value={assignee.name}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    src={assignee.avatar}
                                    size="small"
                                    style={{ marginRight: 8 }}
                                />
                                {assignee.name}
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
                            format="DD-MM-YYYY"
                            style={{ marginRight: 8 }}
                        />
                        <Tooltip title="Confirm">
                            <CheckOutlined
                                onClick={() => saveDate(record.key)}
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
                        {dayjs(record.dueDate).format("DD-MM-YYYY")}
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
            dataIndex: "priority",
            width: "10%",
            render: (_, record) => (
                <Select
                    value={record.priority}
                    // onChange={(value) =>
                    //     // handlePriorityChange(record.key, value)
                    // }
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
                <Button danger>
                    <DeleteOutlined />
                </Button>
            ),
        },
    ];

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
