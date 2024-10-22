import { Link } from "react-router-dom";
import Logo from "../../../components/Header/Logo/Logo";
import "./register.scss";
import "../../../components/Form/forms.scss";
import {
    signUp,
    form_error,
    google,
    lock,
    message,
} from "../../../assets/image";
import { Select } from "antd";
import { useState } from "react";
import { postRegister } from "../../../services/apiServices";
import { toast } from "react-toastify";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("STUDENT");

    const handleRegister = async () => {
        const res = await postRegister(email, password, name, role);
        console.log("response: ", res);

        if (res && res.code === 201) {
            toast.success(res.message);
        } else if (res && res.code === 1501) {
            toast.error(res.message);
            toast.error(res.error);
        }

        // console.log("Email:", email);
        // console.log("Password:", password);
        // console.log("name:", name);
        // console.log("Role:", role);
    };
    return (
        <div className="auth">
            {/* Auth Intro */}
            <div className="auth__intro">
                <img src={signUp} alt="" className="auth__intro-img" />
            </div>

            {/* Auth content */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Logo />

                    <h1 className="auth__heading">Sign Up</h1>
                    <p className="auth__desc">
                        Let’s create your account and choose your mentor.
                    </p>

                    <div action="" className="form auth__form">
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

                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Name"
                                    className="form__input"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    required
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
                        </div>

                        <div className="form__group">
                            <Select
                                className="form__select"
                                style={{
                                    width: "100%",
                                }}
                                placeholder="Select a role"
                                options={[
                                    {
                                        value: "STUDENT",
                                        label: "Student",
                                    },
                                    {
                                        value: "MENTOR",
                                        label: "Mentor",
                                    },
                                ]}
                                value={role}
                                onChange={(value) => setRole(value)}
                            />
                        </div>

                        <div className="form__group auth__btn-group">
                            <button
                                className="btn auth__btn form__submit-btn"
                                onClick={() => handleRegister()}
                            >
                                Sign Up
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
                        You have an account yet?
                        <Link to="/login" className="auth__link">
                            Sign in
                        </Link>
                    </p>

                    {/* <p className="auth__text">
                        Go to admin page
                        <Link to="/admin" className="auth__link">
                            Admin
                        </Link>
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default Register;
