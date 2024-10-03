import { Link } from "react-router-dom";
import { forgotPassword, form_error, lock } from "../../../assets/image";
import Logo from "../../../components/Header/Logo/Logo";

function CreateNewPassWord() {
    return (
        <div className="auth">
            {/* Auth Intro */}
            <div className="auth__intro">
                <img src={forgotPassword} alt="" className="auth__intro-img" />
            </div>

            {/* Auth content */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Logo />

                    <h1 className="auth__heading">Create new password</h1>
                    <p className="auth__desc">
                        At least 6 characters, with uppercase and lowercase
                        letters
                    </p>

                    <form action="" className="form auth__form">
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

                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Confirm new password"
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

                        <div className="form__group auth__btn-group">
                            <button className="btn auth__btn form__submit-btn">
                                Reset Password
                            </button>
                        </div>
                    </form>

                    <p className="auth__text">
                        <Link to="/signUp" className="auth__link">
                            Back to Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CreateNewPassWord;
