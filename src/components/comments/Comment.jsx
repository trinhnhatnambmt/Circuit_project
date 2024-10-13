import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { mentor } from "../../assets/image";

function Comments() {
    return (
        <div className="mentor-detail__reviews">
            <div
                className="reviews__title"
                style={{
                    borderTop: "1px solid #d2d1d6",
                    paddingTop: "10px",
                }}
            >
                Reviews
            </div>
            <div className="mentor-detail__feedback">
                <h1 className="feedback__title">
                    What do you think our mentor?
                </h1>
                <Rate
                    allowHalf
                    defaultValue={0}
                    style={{ marginTop: "13px" }}
                />
                <TextArea
                    type="text"
                    className="feedback__input"
                    style={{ marginTop: "10px", height: "120px" }}
                    placeholder="What do you think ..."
                />
                <div className="feedback__act">
                    <button className="btn submit__btn cancel__btn">
                        Cancel
                    </button>
                    <button className="btn submit__btn">Submit feedback</button>
                </div>
            </div>
            <div className="customer__feedback">
                <div className="customer__feedback-title">
                    What our customers are saying
                </div>
                <div className="customer__feedback-card">
                    <img src={mentor} alt="" className="feedback-avt" />
                    <div className="customer__feedback-info">
                        <h1 className="info-name">Jakir Hussen</h1>
                        <Rate allowHalf defaultValue={2.5} />
                        <p className="info-desc">
                            Great product, I love this Coffee Beans{" "}
                        </p>
                    </div>
                </div>
                <div className="customer__feedback-card">
                    <img src={mentor} alt="" className="feedback-avt" />
                    <div className="customer__feedback-info">
                        <h1 className="info-name">Jakir Hussen</h1>
                        <Rate allowHalf defaultValue={2.5} />
                        <p className="info-desc">
                            Great product, I love this Coffee Beans{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
