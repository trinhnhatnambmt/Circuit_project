// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./index.scss";

// Import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import { Rate } from "antd";
import { mentor } from "../../../assets/image";

//defaults value of props
export default function FeedBackSlider({
    numberOfSlides = 1,
    autoplay = false,
}) {
    return (
        <Swiper
            slidesPerView={numberOfSlides} // Hiển thị nhiều item trên một hàng
            spaceBetween={30} // Khoảng cách giữa các item
            loop={true} // Để lặp lại khi carousel đến cuối
            pagination={{ clickable: true }} // Pagination (nếu cần)
            modules={autoplay ? [Scrollbar, Autoplay] : [Scrollbar]} // Sử dụng Autoplay khi được bật
            autoplay={
                autoplay
                    ? {
                          delay: 2500, // Tốc độ autoplay
                          disableOnInteraction: false, // Giữ autoplay khi người dùng tương tác
                          pauseOnMouseEnter: true, // Dừng khi hover vào item
                      }
                    : false
            }
            className={`carousel ${numberOfSlides > 1 ? "multi-items" : ""}`}
        >
            <SwiperSlide>
                <div className="feedBack__item">
                    <div className="feedBack__item-title">
                        Great platform for learning offline I have ever found!
                    </div>
                    <div className="feedBack__item-content">
                        "Circuit has helped me expand my knowledge through
                        several important courses that are extremely impactful
                        and helpful for my career. For the first time, finishing
                        my degree seemed realistic. It was online with a
                        flexible schedule.”
                    </div>
                    <div className="feedBack__item-user">
                        <img src={mentor} alt="" className="user__avatar" />
                        <div className="user__info">
                            <p className="username">Trent Boult</p>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="feedBack__item">
                    <div className="feedBack__item-title">
                        The best learning experience!
                    </div>
                    <div className="feedBack__item-content">
                        "This platform gave me access to a wide range of topics
                        and knowledgeable mentors. I was able to improve my
                        skills and advance my career."
                    </div>
                    <div className="feedBack__item-user">
                        <img src={mentor} alt="" className="user__avatar" />
                        <div className="user__info">
                            <p className="username">Sarah Adams</p>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="feedBack__item">
                    <div className="feedBack__item-title">
                        Amazing mentors and course structure!
                    </div>
                    <div className="feedBack__item-content">
                        "The content is very well organized, and the mentors are
                        really supportive. Highly recommend it to anyone looking
                        to improve their knowledge."
                    </div>
                    <div className="feedBack__item-user">
                        <img src={mentor} alt="" className="user__avatar" />
                        <div className="user__info">
                            <p className="username">Michael Jordan</p>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="feedBack__item">
                    <div className="feedBack__item-title">
                        Amazing mentors and course structure!
                    </div>
                    <div className="feedBack__item-content">
                        "The content is very well organized, and the mentors are
                        really supportive. Highly recommend it to anyone looking
                        to improve their knowledge."
                    </div>
                    <div className="feedBack__item-user">
                        <img src={mentor} alt="" className="user__avatar" />
                        <div className="user__info">
                            <p className="username">Michael Jordan</p>
                            <Rate allowHalf defaultValue={5} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
