import Points from "../../components/Points/Points";
import Transaction from "../../components/transaction/Transaction";
import "./index.scss";
function PricingPage() {
    return (
        <div className="pricing__page">
            <div className="container">
                <div className="pricing__page-inner">
                    <div className="pricing__page-title">Pricing</div>
                    <div className="pricing__page-group">
                        <Transaction>
                            <Points />
                        </Transaction>
                        <Transaction>
                            <Points points={975} amount="100.000" bonus="100" />
                        </Transaction>
                        <Transaction>
                            <Points
                                points={1975}
                                amount="200.000"
                                bonus="200"
                            />
                        </Transaction>
                        <Transaction>
                            <Points
                                points={5000}
                                amount="500.000"
                                bonus="300"
                            />
                        </Transaction>
                        <Transaction>
                            <Points
                                points={7600}
                                amount="750.000"
                                bonus="400"
                            />
                        </Transaction>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPage;
