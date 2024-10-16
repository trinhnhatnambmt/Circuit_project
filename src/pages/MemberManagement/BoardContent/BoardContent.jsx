import { Button, Card, Dropdown, Menu, Space, Tooltip } from "antd";
import "./index.scss";
import {
    AntCloudOutlined,
    CopyOutlined,
    CreditCardOutlined,
    DeleteOutlined,
    DownOutlined,
    DragOutlined,
    EditOutlined,
    EllipsisOutlined,
    PlusOutlined,
    SaveOutlined,
    ScissorOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";
import Meta from "antd/es/card/Meta";
import { background } from "~/assets/image";
function BoardContent() {
    const menu = (
        <Menu style={{ width: "250px" }}>
            <Menu.Item key="1" icon={<CreditCardOutlined />}>
                <Link>Add new card</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ScissorOutlined />}>
                <Link>Cut</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CopyOutlined />}>
                <Link>Copy</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SaveOutlined />}>
                <Link>Paste</Link>
            </Menu.Item>

            <Menu.Divider />
            <Menu.Item key="5" icon={<DeleteOutlined />}>
                <Link>Remove this column</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<AntCloudOutlined />}>
                <Link>Archive this column</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="boardContent">
            <div className="boardContent__inner">
                <div className="boardContent__column">
                    <div className="boardContent__column-header">
                        <h3>Column title</h3>
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <div
                                className="top-act__user"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Space
                                    style={{
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        color: "#333",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Tooltip title="List actions">
                                        <DownOutlined />
                                    </Tooltip>
                                </Space>
                            </div>
                        </Dropdown>
                    </div>

                    <div className="boardContent__column-listCard">
                        <Card
                            style={{
                                width: "100%",
                                // cursor: "pointer",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={background}
                                    style={{
                                        height: "180px",
                                        objectFit: "cover",
                                    }}
                                />
                            }
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                    </div>

                    <div className="boardContent__column-footer">
                        <Button
                            type="text"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div style={{ display: "flex", gap: "10px" }}>
                                <PlusOutlined style={{ color: "#399151" }} />
                                <p
                                    style={{
                                        fontWeight: 600,
                                        color: "#399151",
                                    }}
                                >
                                    Add new card
                                </p>
                            </div>
                            <Tooltip title="Drag to move">
                                <DragOutlined />
                            </Tooltip>
                        </Button>
                    </div>
                </div>
                <div className="boardContent__column">
                    <div className="boardContent__column-header">
                        <h3>Column title</h3>
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <div
                                className="top-act__user"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Space
                                    style={{
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        color: "#333",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Tooltip title="List actions">
                                        <DownOutlined />
                                    </Tooltip>
                                </Space>
                            </div>
                        </Dropdown>
                    </div>

                    <div className="boardContent__column-listCard">
                        <Card
                            style={{
                                width: "100%",
                                // cursor: "pointer",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={background}
                                    style={{
                                        height: "180px",
                                        objectFit: "cover",
                                    }}
                                />
                            }
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Meta
                                    // title="Card title"
                                    description="This is the description "
                                />
                                <Tooltip title="Edit">
                                    <EditOutlined
                                        key="edit"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Tooltip>
                            </div>
                        </Card>
                    </div>

                    <div className="boardContent__column-footer">
                        <Button
                            type="text"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div style={{ display: "flex", gap: "10px" }}>
                                <PlusOutlined style={{ color: "#399151" }} />
                                <p
                                    style={{
                                        fontWeight: 600,
                                        color: "#399151",
                                    }}
                                >
                                    Add new card
                                </p>
                            </div>
                            <Tooltip title="Drag to move">
                                <DragOutlined />
                            </Tooltip>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardContent;
