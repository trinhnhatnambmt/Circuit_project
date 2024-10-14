import { Link } from "react-router-dom";
import { add, leaf, money } from "../../assets/image";
import "./index.scss";
import { Card, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserData } from "../../redux/features/user/userSlice";

function PersonalInfo() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.account.access_token);
    const userInfo = useSelector((state) => state.user.account.userInfo);

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchUserData(accessToken)); // Gọi thunk action để fetch data
        }
    }, [accessToken, dispatch]);

    console.log("User Info:", userInfo.data);

    return (
        <div className="personal-info">
            <div className="personal-info-item">
                <h2
                    className="personal-info__heading"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "10px",
                    }}
                >
                    My Wallet
                </h2>

                <div className="row">
                    <div className="col-4">
                        <article
                            className="payment-card"
                            style={{ backgroundColor: "#e0eae5" }}
                        >
                            <img
                                src={leaf}
                                alt=""
                                className="payment-card__img"
                            />
                            <div className="payment-card__number">
                                <img src={money} alt="" />
                                1234
                            </div>
                            <div className="payment-card__bottom">
                                <div>
                                    <p className="payment-card__label">
                                        Card Holder
                                    </p>
                                    <p className="payment-card__value">
                                        Imran Khan
                                    </p>
                                </div>
                                <div className="payment-card__expired">
                                    <p className="payment-card__label">
                                        Expired
                                    </p>
                                    <p className="payment-card__value">10/22</p>
                                </div>
                                <div className="payment-card__circle" />
                            </div>
                        </article>
                    </div>

                    <div className="col-4">
                        <Link className="new-card">
                            <img src={add} alt className="new-card__icon" />
                            <p className="new-card__text">Add More Point</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="personal-info-item">
                <h2
                    className="personal-info__heading"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "10px",
                        marginBottom: "20px",
                    }}
                >
                    Personal Info
                </h2>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card
                            type="inner"
                            title="Name"
                            style={{
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                        >
                            {userInfo.data.name}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            type="inner"
                            title="Email"
                            style={{
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                        >
                            {userInfo.data.email}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{
                                marginTop: 16,
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                            type="inner"
                            title="Gender"
                        >
                            {userInfo.data.gender}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{
                                marginTop: 16,
                                boxShadow:
                                    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                            type="inner"
                            title="Phone"
                        >
                            {userInfo.data.phone}
                        </Card>
                    </Col>
                </Row>
                <button className="btn edit__profile-btn">Edit Profile</button>
            </div>
        </div>
    );
}

export default PersonalInfo;
