import { Link } from "react-router-dom";
import Logo from "../../../components/Header/Logo/Logo";
import "./register.scss";
import "../../../components/Form/forms.scss";
function Register() {
    return (
        <div className="auth">
            {/* Auth Intro */}
            <div className="auth__intro">
                <img
                    src="src\assets\img\auth\signUp.svg"
                    alt=""
                    className="auth__intro-img"
                />
            </div>

            {/* Auth content */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Logo />

                    <h1 className="auth__heading">Sign Up</h1>
                    <p className="auth__desc">
                        Let’s create your account and choose your mentor.
                    </p>

                    <form action="" className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email"
                                    className="form__input"
                                    required
                                />
                                <img
                                    src="src\assets\icons\message.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src="src\assets\icons\form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Email is not in correct format !!!
                            </p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="form__input"
                                    required
                                    minLength={6}
                                />
                                <img
                                    src="src\assets\icons\lock.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src="src\assets\icons\form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Password must be at least 6 characters !!!
                            </p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Confirm password"
                                    className="form__input"
                                    required
                                    minLength={6}
                                />
                                <img
                                    src="src\assets\icons\lock.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src="src\assets\icons\form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Password must be at least 6 characters !!!
                            </p>
                        </div>

                        <div className="form__group auth__btn-group">
                            <button className="btn auth__btn form__submit-btn">
                                Sign Up
                            </button>
                            <button className="btn auth__btn auth__btn-outline">
                                <img
                                    src="src\assets\icons\google.svg"
                                    alt=""
                                    className="btn__icon"
                                />
                                Continue with Google
                            </button>
                        </div>
                    </form>

                    <p className="auth__text">
                        You have an account yet?
                        <Link to="/signIn" className="auth__link">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
