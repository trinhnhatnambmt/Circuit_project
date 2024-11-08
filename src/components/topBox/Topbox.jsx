// import { topDealUsers } from "../admin/data";
import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
function Topbox() {
    const [topDealUsers, setTopDealUsers] = useState([]);
    const fetchData = async () => {
        const res = await axios.get(
            "http://167.71.220.5:8080/dashboard/top-deal-users"
        );
        // console.log(res);
        setTopDealUsers(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="topBox">
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map((user) => (
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="" />
                            <div className="userTexts">
                                <div className="username">{user.username}</div>
                                <div className="email">{user.email}</div>
                            </div>
                        </div>
                        <span className="amount">{user.amount} vnd</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Topbox;
