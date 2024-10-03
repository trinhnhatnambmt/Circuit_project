import { Link } from "react-router-dom";
import {
    form_error,
    google,
    lock,
    message,
    login,
} from "../../../assets/image";
import Logo from "../../../components/Header/Logo/Logo";

function Login() {
    return (
        <div className="auth">
            {/* Auth Intro */}
            <div className="auth__intro">
                <img src={login} alt="" className="auth__intro-img" />
            </div>

            {/* Auth content */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Logo />

                    <h1 className="auth__heading">Hello Again!</h1>
                    <p className="auth__desc">
                        Welcome back to sign in. As a returning customer, you
                        have access to your previously saved all information.
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
                                    src={message}
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src={form_error}
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
                                    src={lock}
                                    alt=""
                                    className="form__input-icon"
                                />
                                <img
                                    src={form_error}
                                    alt=""
                                    className="form__input-icon-error"
                                />
                            </div>
                            <p className="form__error">
                                Password must be at least 6 characters !!!
                            </p>
                        </div>

                        <div className="auth__forgotPass">
                            <Link to="/forgotPassword">Forgot Password?</Link>
                        </div>

                        <div className="form__group auth__btn-group">
                            <button className="btn auth__btn form__submit-btn">
                                Login
                            </button>
                            <button className="btn auth__btn auth__btn-outline">
                                <img
                                    src={google}
                                    alt=""
                                    className="btn__icon"
                                />
                                Continue with Google
                            </button>
                        </div>
                    </form>

                    <p className="auth__text">
                        Don’t have an account yet?
                        <Link to="/signUp" className="auth__link">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
