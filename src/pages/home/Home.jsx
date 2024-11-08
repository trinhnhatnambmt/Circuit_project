import "./Home.scss";
import {
    benefit_1,
    benefit_2,
    benefit_3,
    board,
    eclipse,
    goals1,
    goals2,
    hero1,
    hero__more,
    mentor,
    mountain,
    play,
    search,
} from "../../assets/image";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import FeedBackSlider from "../../components/Carousel/FeedBack/FeedBackSlider";
import Carousel from "../../components/Carousel/Mentor/Carousel";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="home__inner">
                    {/* Hero */}
                    <div className="home__hero">
                        <div className="home__hero-content">
                            <h1 className="home__hero-title animate__animated animate__swing">
                                We share knowledge with the world
                            </h1>
                            <div className="home__hero-desc">
                                Circuit is a reputable provider based at FPT
                                University, specializing in providing customized
                                mentors for the SWP department at the school.
                            </div>
                            <form className="home__hero-search">
                                <div className="hero-search__wrapper">
                                    <img src={search} alt="" />
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Find a mentor"
                                    />
                                </div>
                                <button className="btn hero-search__btn">
                                    Discover Now
                                </button>
                            </form>
                        </div>

                        <div className="home__hero-media">
                            <img
                                src={eclipse}
                                alt=""
                                className="hero-media__decor"
                            />
                            <img
                                src={hero1}
                                alt=""
                                className="hero-media__main"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__more">
                <div className="container">
                    <div className="home__more-inner">
                        <div className="hero__more-title">
                            <div>Benefits</div>
                            Mentors are recognized and have many years of
                            experience in the field.
                        </div>
                        <div className="hero__more-media">
                            <div className="media__background"></div>
                            <div
                                className="media__background-fake"
                                style={{ width: "242px", height: "214px" }}
                            ></div>
                            <img src={play} alt="" className="media__decor" />
                            <img
                                src={hero__more}
                                alt=""
                                className="media__img"
                            />
                        </div>
                        <div className="hero__more-info">
                            <div className="info__group">
                                <img
                                    src={mountain}
                                    alt=""
                                    className="info__icon"
                                />
                                <p>Good location right at FPT University</p>
                            </div>
                            <div className="info__group">
                                <img
                                    src={board}
                                    alt=""
                                    className="info__icon"
                                />
                                <p>Student Friendly Classroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals */}
            <div className="home__goals">
                <div className="container">
                    <div className="goals__inner">
                        <h1 className="goals__title">
                            Support to achieve your career goals
                        </h1>
                        <p className="goals__desc">
                            Circuit is flexible and affordable, providing you
                            with exceptional support to achieve your goals.
                        </p>
                        <button className="btn goals__btn">Learn More</button>
                        <div className="goals__media">
                            <img src={goals1} alt="" className="goal__img-1" />
                            <img src={goals2} alt="" className="goal__img-2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="home__benefits">
                <div className="container">
                    <div className="benefits__inner">
                        <div className="benefits__title">
                            Flexible scheduling system easily connects with
                            direct mentors
                        </div>
                        <div className="benefits__group">
                            <div className="benefits__item">
                                <img
                                    src={benefit_1}
                                    alt=""
                                    className="item__img"
                                />
                                <p className="item__title">Mentoring session</p>
                                <div className="item__desc">
                                    Mentoring sessions can last for the duration
                                    of the client's choice. Providing high
                                    quality mentoring services.
                                </div>
                            </div>
                            <div className="benefits__item">
                                <img
                                    src={benefit_2}
                                    alt=""
                                    className="item__img"
                                />
                                <p className="item__title">Friendly Mentor</p>
                                <div className="item__desc">
                                    Friendly Mentor, supporting multiple groups.
                                    All face-to-face meetings are recorded for
                                    future reference.
                                </div>
                            </div>
                            <div className="benefits__item">
                                <img
                                    src={benefit_3}
                                    alt=""
                                    className="item__img"
                                />
                                <p className="item__title">Offline mentoring</p>
                                <div className="item__desc">
                                    Live Mentoring available in convenient
                                    locations
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our mentor */}
            <div className="home__mentor">
                <div className="container">
                    <div className="home__mentor-inner">
                        <div className="home__mentor-title">Our mentor</div>

                        <div className="mentor__group">
                            <Carousel numberOfSlides={1} autoplay />
                        </div>
                        <div className="home__mentor-desc">
                            <Link
                                to="/mentor"
                                className="btn"
                                style={{ fontSize: "16px" }}
                            >
                                All Mentor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our FeedBack */}
            <div className="home__feedBack">
                <div className="container">
                    <h1 className="home__feedBack-title">
                        What students are saying
                    </h1>
                    <p className="home__feedBack-description">
                        Circuit is flexible and affordable and offers you
                        exceptional support to achieve your career goals.
                        Circuit is a Global training provider based across the
                        UK that specialises.
                    </p>

                    <div className="feedBack__group">
                        <FeedBackSlider numberOfSlides={3} autoplay />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
