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
    closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import Column from "./ListColumns/Column/Column";
import CardItem from "./ListColumns/Column/ListCards/Card/Card";
import { cloneDeep } from "lodash";

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

function BoardContent({ board }) {
    // const pointerSensor = useSensor(PointerSensor, {
    //     activationConstraint: { distance: 10 },
    // });
    // const sensors = useSensors(pointerSensor);

    // const [orderedColumns, setOrderedColumns] = useState([]);

    // // Cùng 1 thời điểm chỉ có một phần tử đang được kéo (column hoặc card)
    // const [activeDragItemId, setActiveDragItemId] = useState(null);
    // const [activeDragItemType, setActiveDragItemType] = useState(null);
    // const [activeDragItemData, setActiveDragItemData] = useState(null);
    // const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    //     useState(null);

    // useEffect(() => {
    //     setOrderedColumns(
    //         mapOrder(board?.columns, board?.columnOrderIds, "_id")
    //     );
    // }, [board]);

    // const findColumnByCardId = (cardId) => {
    //     return orderedColumns.find((column) =>
    //         column?.cards?.map((card) => card._id)?.includes(cardId)
    //     );
    // };

    // //Cập nhật lại state trong trường hợp di chuyển Card giữa các column khác nhau
    // const moveCardBetweenDifferentColumns = (
    //     overColumn,
    //     overCardId,
    //     active,
    //     over,
    //     activeColumn,
    //     activeDraggingCardId,
    //     activeDraggingCardData
    // ) => {
    //     setOrderedColumns((prevColumns) => {
    //         //TÌm vị trí (index) của cái overCard trong column đích(nơi activeCard sắp được thả)
    //         const overCardIndex = overColumn?.cards?.findIndex(
    //             (card) => card._id === overCardId
    //         );

    //         let newCardIndex;
    //         const isBelowOverItem =
    //             active.rect.current.translated &&
    //             active.rect.current.translated.top >
    //                 over.rect.top + over.rect.height;

    //         const modifier = isBelowOverItem ? 1 : 0;
    //         newCardIndex =
    //             overCardIndex >= 0
    //                 ? overCardIndex + modifier
    //                 : overColumn?.cards?.length + 1;

    //         const nextColumns = cloneDeep(prevColumns);
    //         const nextActiveColumn = nextColumns.find(
    //             (column) => column._id === activeColumn._id
    //         );

    //         const nextOverColumn = nextColumns.find(
    //             (column) => column._id === overColumn._id
    //         );

    //         if (nextActiveColumn) {
    //             //Xoá card ở cái column active(cũng có thể hiểu là column cũ, cái lúc mà kéo card ra khỏi nó sang column khác)
    //             nextActiveColumn.cards = nextActiveColumn.cards.filter(
    //                 (card) => card._id !== activeDraggingCardId
    //             );

    //             //Cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
    //             nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
    //                 (card) => card._id
    //             );
    //         }

    //         if (nextOverColumn) {
    //             //Kiểm tra xem card đang kéo nó có tồn tại ở overColumn chưa, nếu có thì cần xóa nó trước
    //             nextOverColumn.cards = nextOverColumn.cards.filter(
    //                 (card) => card._id !== activeDraggingCardId
    //             );

    //             //Đối với trường hợp dragEnd thì phải cập nhật lại chuẩn dữ liêu columnId trong card sau khi kéo card giữa 2 column khác nhau
    //             const rebuild_activeDraggingCardData = {
    //                 ...activeDraggingCardData,
    //                 columnId: nextOverColumn._id,
    //             };
    //             //Tiếp theo là thêm cái card đang kéo vào overColumn theo vị trí index mới

    //             nextOverColumn.cards = nextOverColumn.cards.toSpliced(
    //                 newCardIndex,
    //                 0,
    //                 rebuild_activeDraggingCardData
    //             );

    //             //Cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
    //             nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
    //                 (card) => card._id
    //             );
    //         }

    //         return nextColumns;
    //     });
    // };

    // const handleDragStart = (event) => {
    //     // console.log("Handle drag start:", event);
    //     setActiveDragItemId(event?.active?.id);
    //     setActiveDragItemType(
    //         event?.active?.data?.current?.columnId
    //             ? ACTIVE_DRAG_ITEM_TYPE.CARD
    //             : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    //     );
    //     setActiveDragItemData(event?.active?.data?.current);

    //     //Nếu là kéo card thì mới thực hiện hành động set giá trị oldColumn
    //     if (event?.active?.data?.current?.columnId) {
    //         setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id));
    //     }
    // };

    // //Trigger trong quá trình kéo (drag) một phần tử
    // const handleDragOver = (event) => {
    //     //KHông làm gì thêm nếu như ta đang kéo column
    //     if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
    //         return;
    //     }

    //     // console.log("Handle Drag over: ", event);

    //     //Còn nếu kéo card thì xử lý thêm để có thể kéo card qua lại giữa các column
    //     const { active, over } = event;

    //     //Cần đảm bảo không tồn tại active hoặc over (khi kéo ra khỏi phạm vi container) thì không làm gì (tránh crash trang)
    //     if (!active || !over) return;

    //     //activeDraggingCard: Là cái card đang được kéo
    //     const {
    //         id: activeDraggingCardId,
    //         data: { current: activeDraggingCardData },
    //     } = active;

    //     //overCard: là cái card đang tương tác trên hoặc dưới so với cái card được kéo ở trên
    //     const { id: overCardId } = over;

    //     //Tìm 2 cái column theo cardId
    //     const activeColumn = findColumnByCardId(activeDraggingCardId);
    //     const overColumn = findColumnByCardId(overCardId);

    //     if (!activeColumn || !overColumn) return;

    //     if (activeColumn._id !== overColumn._id) {
    //         moveCardBetweenDifferentColumns(
    //             overColumn,
    //             overCardId,
    //             active,
    //             over,
    //             activeColumn,
    //             activeDraggingCardId,
    //             activeDraggingCardData
    //         );
    //     }
    // };

    // const handleDragEnd = (event) => {
    //     const { active, over } = event;

    //     if (!active || !over) return;
    //     // console.log("Handle drag end: ", event);

    //     //Xử lí kéo Card
    //     if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
    //         const {
    //             id: activeDraggingCardId,
    //             data: { current: activeDraggingCardData },
    //         } = active;

    //         //overCard: là cái card đang tương tác trên hoặc dưới so với cái card được kéo ở trên
    //         const { id: overCardId } = over;

    //         //Tìm 2 cái column theo cardId
    //         const activeColumn = findColumnByCardId(activeDraggingCardId);
    //         const overColumn = findColumnByCardId(overCardId);

    //         if (!activeColumn || !overColumn) return;

    //         if (oldColumnWhenDraggingCard._id !== overColumn._id) {
    //             // console.log("Hanh dong keo card giua 2 column khac nhau");
    //             moveCardBetweenDifferentColumns(
    //                 overColumn,
    //                 overCardId,
    //                 active,
    //                 over,
    //                 activeColumn,
    //                 activeDraggingCardId,
    //                 activeDraggingCardData
    //             );
    //         } else {
    //             // console.log("Hanh dong keo card trong 1 column");

    //             //Lấy vị trí cũ từ thằng oldColumnWhenDraggingCard
    //             const oldCardIndex =
    //                 oldColumnWhenDraggingCard?.cards?.findIndex(
    //                     (c) => c._id === activeDragItemId
    //                 );

    //             //Lay vi tri moi ( tu thang over)
    //             const newCardIndex = overColumn?.cards?.findIndex(
    //                 (c) => c._id === overCardId
    //             );

    //             const dndOrderedCards = arrayMove(
    //                 oldColumnWhenDraggingCard?.cards,
    //                 oldCardIndex,
    //                 newCardIndex
    //             );

    //             setOrderedColumns((prevColumns) => {
    //                 const nextColumns = cloneDeep(prevColumns);
    //                 //Tìm tới cái column chúng ta đang thả
    //                 const targetColumn = nextColumns.find(
    //                     (column) => column._id === overColumn._id
    //                 );

    //                 targetColumn.cards = dndOrderedCards;
    //                 targetColumn.cardOrderIds = dndOrderedCards.map(
    //                     (card) => card._id
    //                 );
    //                 return nextColumns;
    //             });
    //         }
    //     }

    //     //Xử lí kéo thả Columns
    //     if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
    //         console.log("Hành động kéo thả column !");

    //         if (active.id !== over.id) {
    //             // Lay vi tri cu(tu thang active)
    //             const oldColumnIndex = orderedColumns.findIndex(
    //                 (c) => c._id === active.id
    //             );

    //             //Lay vi tri moi ( tu thang over)
    //             const newColumnIndex = orderedColumns.findIndex(
    //                 (c) => c._id === over.id
    //             );

    //             //Dùng arrayMove của thằng dnd-kit để sắp xếp lại mảng columns ban đầu
    //             const dndOrderedColumns = arrayMove(
    //                 orderedColumns,
    //                 oldColumnIndex,
    //                 newColumnIndex
    //             );
    //             //2 cái clg dữ liệu này sau dùng để gọi xử lí API
    //             // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);
    //             // console.log("dndorderedcolumn:", dndOrderedColumns);
    //             // console.log("dndorderedcolumnIds:", dndOrderedColumnsIds);

    //             setOrderedColumns(dndOrderedColumns);
    //         }
    //     }

    //     //Những dữ liệu sao khi kéo thả này luoon phải đưa về giá trị null mặc định ban đầu
    //     setActiveDragItemData(null);
    //     setActiveDragItemId(null);
    //     setActiveDragItemType(null);
    //     setOldColumnWhenDraggingCard(null);
    // };

    // const customDropAnimation = {
    //     sideEffects: defaultDropAnimationSideEffects({
    //         styles: {
    //             active: {
    //                 opacity: "0,5",
    //             },
    //         },
    //     }),
    // };

    return (
        <DndContext
            // sensors={sensors}
            // collisionDetection={closestCorners}
            // onDragStart={handleDragStart}
            // onDragOver={handleDragOver}
            // onDragEnd={handleDragEnd}
        >
            <div className="boardContent">
                {/* <ListColumn columns={orderedColumns} />
                <DragOverlay dropAnimation={customDropAnimation}>
                    {!activeDragItemType && null}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                        <Column column={activeDragItemData} />
                    )}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
                        <CardItem card={activeDragItemData} />
                    )}
                </DragOverlay> */}
            </div>
        </DndContext>
    );
}

export default BoardContent;
