import axios from "axios";
import Points from "../../components/Points/Points";
import Transaction from "../../components/transaction/Transaction";
import "./index.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loader from "~/components/Loader/Loader";
import { toast } from "react-toastify";
function PricingPage() {
    const accessToken = useSelector((state) => state.user.account.access_token);
    const [loading, setLoading] = useState(false);
    const handleDeposit = async (amount) => {
        setLoading(true);
        try {
            const res = await axios.post(
                "http://167.71.220.5:8080/payment/deposit",
                {
                    amount,
                    description: "Thanh toán cho mã GD",
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (res.data) {
                window.location.href = res.data;
            } else {
                toast.error("Không nhận được link thanh toán.");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API thanh toán:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`pricing__page`}>
            {loading && (
                <div className="loader-container">
                    <Loader />
                </div>
            )}
            <div className="container">
                <div className="pricing__page-inner">
                    <div className="pricing__page-title">Pricing</div>
                    <div className="pricing__page-group">
                        <Transaction onDeposit={() => handleDeposit(50000)}>
                            <Points />
                        </Transaction>
                        <Transaction onDeposit={() => handleDeposit(100000)}>
                            <Points points={100000} amount="100.000" />
                        </Transaction>
                        <Transaction onDeposit={() => handleDeposit(200000)}>
                            <Points points={200000} amount="200.000" />
                        </Transaction>
                        <Transaction onDeposit={() => handleDeposit(500000)}>
                            <Points points={500000} amount="500.000" />
                        </Transaction>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPage;
