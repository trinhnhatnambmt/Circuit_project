import { footer__socials, master, paypal, visa } from "../../assets/image";
import Logo from "../Header/Logo/Logo";
import "./index.scss";
function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__item">
                        <div className="title">Mentor</div>
                        <ul>
                            <li>Classroom Courses</li>
                            <li>Virtual Classroom Courses</li>
                            <li>E-Learning Courses</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="title">Circuit</div>
                        <ul>
                            <li>About us</li>
                            <li>Why Circuit</li>
                            <li>Testimonials</li>
                            <li>Promotions</li>
                            <li>Blog</li>
                            <li>Podcasts</li>
                            <li>Forum</li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="title">Help</div>
                        <ul>
                            <li>Contact us</li>
                            <li>Our Venues</li>
                            <li>My account</li>
                        </ul>
                    </div>

                    <div className="footer__contact">
                        <div className="title">Newsletter</div>
                        <div className="footer-contact__wrapper">
                            <div className="footer-contact__input__wrap">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email address"
                                />
                            </div>
                            <button className="btn footer-contact__btn">
                                Subscribe
                            </button>
                        </div>
                        <div className="footer__socials">
                            <img src={footer__socials} alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer__end">
                    <Logo />
                    <div className="footer__end-icons">
                        <img src={paypal} alt="" />
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                    </div>
                    <p>Copyright © 2024 FPT all rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
