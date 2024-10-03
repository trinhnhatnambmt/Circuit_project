import "./Home.scss";
import {
    board,
    eclipse,
    hero1,
    hero__more,
    mountain,
    play,
    search,
} from "../../assets/image";

function Home() {
    return (
        <div className="home" style={{ height: "10000px" }}>
            <div className="container">
                <div className="home__inner">
                    <div className="home__hero">
                        <div className="home__hero-content">
                            <h1 className="home__hero-title">
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
        </div>
    );
}

export default Home;
