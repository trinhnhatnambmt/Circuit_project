import { major, mentor, money, tick } from "../../assets/image";
import BookAppointment from "../../components/BookAppointment/BookAppointment";
import "./index.scss";
import Comments from "../../components/comments/Comment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataUserWithId } from "~/services/apiServices";
import Loader from "~/components/Loader/Loader";
function MentorDetail() {
    const params = useParams();
    const mentorId = params.id;
    const [mentorDetail, setMentorDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchMentorDetail = async () => {
        setLoading(true);
        try {
            const response = await getDataUserWithId(mentorId);
            setMentorDetail(response.data);
        } catch (error) {
            console.error("Failed to fetch mentor detail:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMentorDetail();
    }, [mentorId]);

    return (
        <div className="mentor-detail">
            {loading ? (
                <div className="loader-container">
                    <Loader />
                </div>
            ) : (
                <div className="container">
                    <div className="mentor-detail__inner">
                        <div className="mentor-detail__media">
                            <img
                                src={mentorDetail.avatar}
                                alt=""
                                className="mentor__img"
                            />
                        </div>
                        <div className="mentor-detail__content">
                            <div className="mentor__detail-title">
                                <p>{mentorDetail.name}</p>
                                <img src={tick} alt="" />
                            </div>
                            <div className="mentor__detail-major">
                                {mentorDetail.specializations.join(" / ")}
                                <img className="icon" src={major} alt />
                            </div>
                            <div className="mentor__detail-desc">
                                <p>About:</p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Incidunt sapiente ab
                                exercitationem, illum quidem vel praesentium
                                tempore dignissimos architecto voluptas quo,
                                obcaecati vitae natus neque reprehenderit omnis
                                suscipit alias.Incidunt sapiente ab
                                exercitationem, illum quidem vel praesentium
                                tempore dignissimos architecto voluptas quo,
                                obcaecati vitae natus neque reprehenderit omnis
                                suscipit alias.
                            </div>

                            <div className="mentor__detail-appointment">
                                <div className="mentor__detail-appointment-title">
                                    Appointment fee:
                                </div>
                                <div className="mentor__detail-appointment-fee">
                                    <img
                                        src={money}
                                        alt=""
                                        className="fee__img"
                                    />
                                    <p>{mentorDetail.walletPoint}</p>
                                </div>
                            </div>

                            <BookAppointment />
                        </div>
                    </div>

                    <Comments comments={mentorDetail.comments || []} />
                </div>
            )}
        </div>
    );
}

export default MentorDetail;
