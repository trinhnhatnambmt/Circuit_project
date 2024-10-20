import { Button } from "antd";
import Column from "./Column/Column";
import { PlusOutlined } from "@ant-design/icons";
import {
    SortableContext,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListColumn({ columns }) {
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
                    <Button
                        type="text"
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: "12px",
                        }}
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
                </div>
            </div>
        </SortableContext>
    );
}

export default ListColumn;
