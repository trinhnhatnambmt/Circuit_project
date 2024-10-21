import { EditOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import { background } from "~/assets/image";
function CardItem({ card }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: card._id, data: { ...card } });

    const dndKitCardStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : undefined,
        border: isDragging ? "1px solid #2ecc71" : undefined,
    };
    return (
        <Card
            ref={setNodeRef}
            style={{
                // Kết hợp các style cũ và mới
                ...dndKitCardStyles,
                width: "100%",
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
            }}
            {...attributes}
            {...listeners}
            cover={
                card?.cover ? (
                    <img
                        alt="example"
                        src={card?.cover}
                        style={{
                            height: "180px",
                            objectFit: "cover",
                        }}
                    />
                ) : null
            }
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Meta title={card?.title} description={card?.description} />
                <Tooltip title="Edit">
                    <EditOutlined key="edit" style={{ cursor: "pointer" }} />
                </Tooltip>
            </div>
        </Card>
    );
}

export default CardItem;
