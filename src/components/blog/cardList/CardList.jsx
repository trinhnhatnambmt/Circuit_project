import Pagination from "../pagination/Pagination";
import Card from "./card/Card";
import "./index.scss";
function CardList() {
    return (
        <div className="card__list">
            <h1 className="card__list-title">Recent Posts</h1>
            <div className="card__list-posts">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    );
}

export default CardList;
