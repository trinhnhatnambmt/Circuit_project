import TextArea from "antd/es/input/TextArea";
import { major, mentor, money, tick } from "../../assets/image";
import BookAppointment from "../../components/BookAppointment/BookAppointment";
import "./index.scss";
import { Rate } from "antd";
function MentorDetail() {
    return (
        <div className="mentor-detail">
            <div className="container">
                <div className="mentor-detail__inner">
                    <div className="mentor-detail__media">
                        <img src={mentor} alt="" className="mentor__img" />
                    </div>
                    <div className="mentor-detail__content">
                        <div className="mentor__detail-title">
                            <p>Trinh Nhat Huy Dep Trai</p>
                            <img src={tick} alt="" />
                        </div>
                        <div className="mentor__detail-major">
                            Software Engineer
                            <img className="icon" src={major} alt />
                        </div>
                        <div className="mentor__detail-desc">
                            <p>About:</p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Incidunt sapiente ab exercitationem, illum
                            quidem vel praesentium tempore dignissimos
                            architecto voluptas quo, obcaecati vitae natus neque
                            reprehenderit omnis suscipit alias.Incidunt sapiente
                            ab exercitationem, illum quidem vel praesentium
                            tempore dignissimos architecto voluptas quo,
                            obcaecati vitae natus neque reprehenderit omnis
                            suscipit alias.
                        </div>

                        <div className="mentor__detail-appointment">
                            <div className="mentor__detail-appointment-title">
                                Appointment fee:
                            </div>
                            <div className="mentor__detail-appointment-fee">
                                <img src={money} alt="" className="fee__img" />
                                <p>50</p>
                            </div>
                        </div>

                        <BookAppointment />
                    </div>
                </div>

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
                            <button className="btn submit__btn">
                                Submit feedback
                            </button>
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
            </div>
        </div>
    );
}

export default MentorDetail;
