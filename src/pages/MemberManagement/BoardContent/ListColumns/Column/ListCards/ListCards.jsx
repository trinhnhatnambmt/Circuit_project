import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CardItem from "./Card/Card";

function ListCards({ cards }) {
    return (
        <SortableContext
            items={cards?.map((c) => c._id)}
            strategy={verticalListSortingStrategy}
        >
            <div className="boardContent__column-listCard">
                {cards?.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
            </div>
        </SortableContext>
    );
}

export default ListCards;
