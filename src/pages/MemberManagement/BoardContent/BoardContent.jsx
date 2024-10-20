import "./index.scss";
import ListColumn from "./ListColumns/ListColumn";
import { mapOrder } from "~/utils/sort";
import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimation,
    defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import Column from "./ListColumns/Column/Column";
import CardItem from "./ListColumns/Column/ListCards/Card/Card";

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

function BoardContent({ board }) {
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: { distance: 10 },
    });
    const sensors = useSensors(pointerSensor);

    const [orderedColumns, setOrderedColumns] = useState([]);

    // Cùng 1 thời điểm chỉ có một phần tử đang được kéo (column hoặc card)
    const [activeDragItemId, setActiveDragItemId] = useState(null);
    const [activeDragItemType, setActiveDragItemType] = useState(null);
    const [activeDragItemData, setActiveDragItemData] = useState(null);

    useEffect(() => {
        setOrderedColumns(
            mapOrder(board?.columns, board?.columnOrderIds, "_id")
        );
    }, [board]);

    const handleDragStart = (event) => {
        console.log("Handle drag start:", event);
        setActiveDragItemId(event?.active?.id);
        setActiveDragItemType(
            event?.active?.current?.columnId
                ? ACTIVE_DRAG_ITEM_TYPE.CARD
                : ACTIVE_DRAG_ITEM_TYPE.COLUMN
        );
        setActiveDragItemData(event?.active?.data?.current);
    };

    const handleDragEnd = (event) => {
        console.log("Handle drag end: ", event);
        const { active, over } = event;

        if (!over) return;

        if (active.id !== over.id) {
            // Lay vi tri cu(tu thang active)
            const oldIndex = orderedColumns.findIndex(
                (c) => c._id === active.id
            );

            //Lay vi tri moi ( tu thang over)
            const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

            //Dùng arrayMove của thằng dnd-kit để sắp xếp lại mảng columns ban đầu
            const dndOrderedColumns = arrayMove(
                orderedColumns,
                oldIndex,
                newIndex
            );
            //2 cái clg dữ liệu này sau dùng để gọi xử lí API
            // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
            // console.log("dndorderedcolumn:", dndOrderedColumns);
            // console.log("dndorderedcolumnIds:", dndOrderedColumnsIds);

            setOrderedColumns(dndOrderedColumns);
        }

        setActiveDragItemData(null);
        setActiveDragItemId(null);
        setActiveDragItemType(null);
    };

    const customDropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: "0,5",
                },
            },
        }),
    };

    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <div className="boardContent">
                <ListColumn columns={orderedColumns} />
                <DragOverlay dropAnimation={customDropAnimation}>
                    {!activeDragItemType && null}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                        <Column column={activeDragItemData} />
                    )}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
                        <CardItem card={activeDragItemData} />
                    )}
                </DragOverlay>
            </div>
        </DndContext>
    );
}

export default BoardContent;
