import { Button, Result } from "antd";
import { Link } from "react-router-dom";

function PaymentSuccess() {
    return (
        <Result
            status="success"
            title="Thank you, your deposit has been successful!"
            extra={[
                <Button
                    type="primary"
                    key="console"
                    style={{
                        backgroundColor: "#52c41a",
                        color: "#fff ",
                    }}
                >
                    <Link to="/">Back to homepage</Link>
                </Button>,
            ]}
        />
    );
}

export default PaymentSuccess;
