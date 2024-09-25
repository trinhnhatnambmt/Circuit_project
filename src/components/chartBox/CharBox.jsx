import { Link } from "react-router-dom";
import "./index.scss";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { profile } from "../../assets/image";
function CharBox(props) {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={profile} alt="" />
                    <span style={{ flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                        {props.title}
                    </span>
                </div>
                <h1> {props.number}</h1>
                <Link to="">View all</Link>
            </div>
            <div className="charInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{
                                    background: "transparent",
                                    border: "none",
                                }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span
                        className="percentage"
                        style={{
                            color:
                                props.percentage < 0 ? "tomato" : "limegreen",
                        }}
                    >
                        {props.percentage}%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    );
}

export default CharBox;
