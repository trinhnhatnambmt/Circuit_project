import { Button, Dropdown, Menu, Space, Tooltip } from "antd";
import {
    AntCloudOutlined,
    CopyOutlined,
    CreditCardOutlined,
    DeleteOutlined,
    DownOutlined,
    DragOutlined,
    PlusOutlined,
    SaveOutlined,
    ScissorOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ListCards from "./ListCards/ListCards";
import { mapOrder } from "~/utils/sort";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Column({ column }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: column._id, data: { ...column } });

    const dndKitColumnStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
        height: "100%",
        opacity: isDragging ? 0.5 : undefined,
    };

    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
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
        <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
            <div className="boardContent__column" {...listeners}>
                <div className="boardContent__column-header">
                    <h3>{column?.title}</h3>
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

                <ListCards cards={orderedCards} />

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
    );
}

export default Column;
