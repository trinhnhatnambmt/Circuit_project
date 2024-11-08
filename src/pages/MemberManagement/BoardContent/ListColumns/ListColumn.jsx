import { Button, Input } from "antd";
import Column from "./Column/Column";
import { CloseOutlined, DragOutlined, PlusOutlined } from "@ant-design/icons";
import {
    SortableContext,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { toast } from "react-toastify";
function ListColumn({ columns }) {
    const [openNewColumnForm, setOpenNewColumnForm] = useState(false);
    const toggleOpenNewColumnForm = () =>
        setOpenNewColumnForm(!openNewColumnForm);

    const [newColumnTitle, setNewColumnTitle] = useState("");
    const addNewColumnTitle = () => {
        if (!newColumnTitle) {
            toast.error("Please input your column title!!!");
        }
        console.log(newColumnTitle);
        //goi api...
        setNewColumnTitle("");
    };
    // SortableContext yêu cầu items là một mảng có dạng ["id-1", "id-2"] chứ không phải có là [{id: "id-1"}, {id: "id-2"}]
    // Nếu không đúng thì vẫn kéo thả được nhưng không có animation
    return (
        <SortableContext
            items={columns?.map((c) => c._id)}
            strategy={horizontalListSortingStrategy}
        >
            <div className="boardContent__inner">
                {columns?.map((column) => (
                    <Column key={column.id} column={column} />
                ))}

                <div className="addNewColumn">
                    {!openNewColumnForm ? (
                        <Button
                            type="text"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                borderRadius: "12px",
                            }}
                            onClick={toggleOpenNewColumnForm}
                        >
                            <div style={{ display: "flex", gap: "10px" }}>
                                <PlusOutlined style={{ color: "#fff" }} />
                                <p
                                    style={{
                                        fontWeight: 600,
                                        color: "#fff",
                                    }}
                                >
                                    Add new card
                                </p>
                            </div>
                        </Button>
                    ) : (
                        <div>
                            <Input
                                autoFocus
                                placeholder="Enter column title..."
                                value={newColumnTitle}
                                onChange={(e) =>
                                    setNewColumnTitle(e.target.value)
                                }
                            />
                            <div
                                style={{
                                    padding: "10px",
                                    display: "flex",
                                    gap: "10px",
                                }}
                            >
                                <Button
                                    type="primary"
                                    style={{
                                        // width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    onClick={addNewColumnTitle}
                                >
                                    <div
                                        style={{ display: "flex", gap: "10px" }}
                                    >
                                        <p
                                            style={{
                                                fontWeight: 600,
                                                // color: "#399151",
                                            }}
                                        >
                                            Add Column
                                        </p>
                                    </div>
                                </Button>
                                <Button
                                    type="text"
                                    onClick={toggleOpenNewColumnForm}
                                >
                                    <CloseOutlined />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SortableContext>
    );
}

export default ListColumn;
