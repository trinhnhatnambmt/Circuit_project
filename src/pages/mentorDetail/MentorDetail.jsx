import { major, mentor, money, tick } from "../../assets/image";
import BookAppointment from "../../components/BookAppointment/BookAppointment";
import "./index.scss";
import Comments from "../../components/comments/Comment";
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

                <Comments />
            </div>
        </div>
    );
}

export default MentorDetail;
