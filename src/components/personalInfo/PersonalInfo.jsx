import { Link } from "react-router-dom";
import { add, leaf, money } from "../../assets/image";
import "./index.scss";
import { Col, Form, Input, Row } from "antd";
function PersonalInfo() {
    return (
        <div className="personal-info">
            <h2
                className="personal-info__heading"
                style={{
                    borderBottom: "1px solid #d2d1d6",
                    paddingBottom: "10px",
                }}
            >
                My Wallet
            </h2>
            {/* <p className="personal-info__desc">Points</p> */}

            <div className="row">
                <div className="col-4">
                    <article
                        className="payment-card"
                        style={{ backgroundColor: "#e0eae5" }}
                    >
                        <img src={leaf} alt="" className="payment-card__img" />
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
                                <p className="payment-card__label">Expired</p>
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

            <div className="personal-info__main">
                <h2 className="personal-info__heading">Personal Info</h2>
                <Form
                    style={{ maxWidth: "100%", marginTop: "20px" }}
                    labelCol={{
                        span: 24,
                    }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Name">
                                <Input style={{ height: "45px" }} />{" "}
                            </Form.Item>

                            <Form.Item label="Phone">
                                <Input style={{ height: "45px" }} />{" "}
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                rules={[{ type: "email" }]}
                            >
                                <Input style={{ height: "45px" }} />{" "}
                            </Form.Item>

                            <Form.Item label="Password">
                                <Input style={{ height: "45px" }} />{" "}
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Nút Save */}
                    <Form.Item>
                        <button className="btn" style={{ fontSize: "17px" }}>
                            Edit Profile
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default PersonalInfo;
