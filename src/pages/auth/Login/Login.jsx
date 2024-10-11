import { Link, useNavigate } from "react-router-dom";
import {
    form_error,
    google,
    lock,
    message,
    login,
} from "../../../assets/image";
import Logo from "../../../components/Header/Logo/Logo";
import { useState } from "react";
import { postLogin } from "../../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FETCH_USER_LOGIN_SUCCESS } from "../../../features/user/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        let res = await postLogin(email, password);
        if (res && res.code === 200) {
            dispatch(FETCH_USER_LOGIN_SUCCESS(res));
            toast.success(res.message);
            navigate("/");
        } else {
            toast.error(res.message);
            toast.error(res.error);
        }
    };
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

                    <div className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email"
                                    className="form__input"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
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
                                    value={password}
                                    onChange={(event) =>
                                        setPassWord(event.target.value)
                                    }
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
                            <button
                                className="btn auth__btn form__submit-btn"
                                onClick={() => handleLogin()}
                            >
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
                    </div>

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
