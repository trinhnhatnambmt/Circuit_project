import { Button, Result } from "antd";

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
                    Back to homepage
                </Button>,
            ]}
        />
    );
}

export default PaymentSuccess;
