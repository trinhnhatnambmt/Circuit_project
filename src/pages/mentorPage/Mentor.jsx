import { Link } from "react-router-dom";
import { avatar, heart, mentor, mentor__icon, tick } from "../../assets/image";
import "./index.scss";
import ButtonLike from "../../components/Button/ButtonLike";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMentorData } from "../../redux/features/mentor/mentorSlice";
function Mentor() {
  const dispatch = useDispatch();
  const { mentors, loading, error } = useSelector((state) => state.mentor);

  useEffect(() => {
    dispatch(fetchMentorData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="mentor__page">
      <div className="container">
        <div className="mentor__page-inner">
          <div className="mentor__page-title">Our mentor</div>
          <div className="mentor__page-group">
            {mentors.length > 0 &&
              mentors.map((mentor, index) => (
                <div className="mentor__page-item">
                  <Link to="/mentorDetail">
                    {" "}
                    <img src={mentor.avatar} alt="" className="mentor__img" />
                  </Link>
                  <button className="mentor__page-liked">
                    <ButtonLike />
                  </button>
                  <div className="mentor__info">
                    {/* {mentor.enumList.map((major, index) => (
                      <div className="mentor__major">{major}</div>
                    ))} */}
                    <div className="mentor__major">
                      {mentor.enumList.join(" | ")}
                    </div>
                    <div className="mentor__name">
                      <Link to="/mentorDetail" className="name">
                        {mentor.accountName}
                      </Link>
                      <img
                        src={tick}
                        alt=""
                        className="tick"
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                    <div className="mentor__email">
                      <img
                        src={mentor__icon}
                        alt=""
                        className="mentor__email-icon"
                      />
                      <p className="email">{mentor.accountEmail}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
