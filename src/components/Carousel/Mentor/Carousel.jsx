// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./index.scss";

// Import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import { mentor } from "../../../assets/image";

//defaults value of props
export default function Carousel({ numberOfSlides = 4, autoplay = false }) {
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
                <div className="mentor__item">
                    <img src={mentor} alt="mentor" className="mentor__img" />
                    <div className="mentor__name">Chris Haroun</div>
                    <div className="mentor__major">Software engineer</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mentor__item">
                    <img src={mentor} alt="mentor" className="mentor__img" />
                    <div className="mentor__name">Chris Haroun</div>
                    <div className="mentor__major">Software engineer</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mentor__item">
                    <img src={mentor} alt="mentor" className="mentor__img" />
                    <div className="mentor__name">Chris Haroun</div>
                    <div className="mentor__major">Software engineer</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mentor__item">
                    <img src={mentor} alt="mentor" className="mentor__img" />
                    <div className="mentor__name">Chris Haroun</div>
                    <div className="mentor__major">Software engineer</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mentor__item">
                    <img src={mentor} alt="mentor" className="mentor__img" />
                    <div className="mentor__name">Chris Haroun</div>
                    <div className="mentor__major">Software engineer</div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
