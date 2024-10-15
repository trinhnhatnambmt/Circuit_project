import "./index.scss";
function Transaction({ children }) {
    return (
        <div className="transaction__component">
            <div className="transaction">
                <div className="left-side">
                    <div className="card">
                        <div className="card-line" />
                        <div className="buttons" />
                    </div>
                    <div className="post">
                        <div className="post-line" />
                        <div className="screen">
                            <div className="dollar">$</div>
                        </div>
                        <div className="numbers" />
                        <div className="numbers-line2" />
                    </div>
                </div>
                <div className="right-side">
                    <div className="new">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
