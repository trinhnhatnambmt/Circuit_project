import { money } from "../../assets/image";
import "./index.scss";

function Points({ points = 50000, amount = "50.000" }) {
    return (
        <div className="points">
            <div className="points__group">
                <img src={money} alt="" className="point__img" />
                <div className="points__item">
                    <p className="point__quantity">{points}</p>
                </div>
            </div>
            <button className="btn points__btn">{amount} VND</button>
        </div>
    );
}

export default Points;
