import {
    avt__result1,
    avt__result2,
    avt__result3,
    avt__result4,
    avt__result5,
    avt__result6,
    story,
} from "../../assets/image";
import "./index.scss";
function About_us() {
    return (
        <div className="aboutUs">
            <div className="aboutUs__story">
                <div className="container">
                    <div className="aboutUs__story-inner">
                        <img src={story} alt="" className="story__img" />
                        <div className="story__content">
                            <h1 className="story__title">Our story</h1>
                            <p className="story__desc">
                                Our journey began with a shared passion for
                                education and a desire to empower students.
                                Recognizing the challenges many face in their
                                academic pursuits, we came together to create a
                                platform that connects students with experienced
                                mentors. Through collaboration and dedication,
                                we aim to inspire and support the next
                                generation of learners in reaching their full
                                potential.
                            </p>
                            <p className="story__more">
                                <b>
                                    107 million learners and more than 7,000
                                    campuses, businesses, and governments
                                </b>
                                have come to Coursera to access world-class
                                learning—anytime, anywhere.
                            </p>
                        </div>
                    </div>

                    <div className="aboutUs__grow">
                        <div className="aboutUs__grow-title">
                            We just keep growing
                        </div>
                        <div className="aboutUs__grow-desc">
                            Our global community and mentor catalog are growing
                            every day.
                        </div>
                        <div className="aboutUs__grow-quantity">
                            <div className="quantity-item">
                                <p className="number">4M+</p>
                                <p className="desc">Total Learners</p>
                            </div>
                            <div className="quantity-item">
                                <p className="number">1K+</p>
                                <p className="desc">Total Mentor</p>
                            </div>
                            <div className="quantity-item">
                                <p className="number">4K+</p>
                                <p className="desc">Total Followers</p>
                            </div>
                            <div className="quantity-item">
                                <p className="number">1M+</p>
                                <p className="desc">Course Enrolled</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutUs__result">
                <div
                    className="container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <img
                        src={avt__result1}
                        alt=""
                        className="result__img"
                        style={{
                            width: "62px",
                            height: "62px",
                            borderRadius: "50%",
                            margin: "10px",
                            transform: "translateY(20px)", // Điều chỉnh vị trí lên xuống
                        }}
                    />
                    <img
                        src={avt__result2}
                        alt=""
                        className="result__img"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            margin: "10px",
                            transform: "translateY(40px)", // Điều chỉnh vị trí lên xuống
                        }}
                    />
                    <img
                        src={avt__result3}
                        alt=""
                        className="result__img"
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            margin: "10px",
                            transform: "translateY(-30px)", // Điều chỉnh vị trí lên xuống
                        }}
                    />
                    <img
                        src={avt__result4}
                        alt=""
                        className="result__img"
                        style={{
                            width: "144px",
                            height: "144px",
                            borderRadius: "50%",
                            margin: "10px",
                            transform: "translateY(10px)", // Điều chỉnh vị trí lên xuống
                        }}
                    />
                    <img
                        src={avt__result5}
                        alt=""
                        className="result__img"
                        style={{
                            width: "76px",
                            height: "76px",
                            borderRadius: "50%",
                            margin: "10px",
                            transform: "translateY(-20px)", // Điều chỉnh vị trí lên xuống
                        }}
                    />
                    <img
                        src={avt__result6}
                        alt=""
                        className="result__img"
                        style={{
                            width: "62px",
                            height: "62px",
                            borderRadius: "50%",
                            margin: "10px",
                            transform: "translateY(30px)", // Điều chỉnh vị trí lên xuống
                        }}
                    />
                </div>
                <div
                    className="aboutUs__result-content"
                    style={{ textAlign: "center", marginTop: "20px" }}
                >
                    <div className="aboutUs__result-title">
                        More than 1M+ successful students
                    </div>
                    <div className="aboutUs__result-desc">
                        Circuit is flexible and affordable and offers you
                        exceptional support to achieve your career goals.
                    </div>
                    <button className="btn about__result-btn">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About_us;
