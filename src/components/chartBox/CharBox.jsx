import { Link } from "react-router-dom";
import "./index.scss";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
function CharBox(props) {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src="src\assets\icons\profile.svg" alt="" />
                    <span style={{ flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                        {props.title}
                    </span>
                </div>
                <h1> {props.number}</h1>
                <Link to="">View all</Link>
            </div>
            <div className="charInfo">
                <div className="chart">
                    <LineChart
                        width={260}
                        height={100}
                        data={props.chartData}
                        margin={{ top: 5, left: 100, bottom: 5 }}
                    >
                        <Tooltip />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line
                            type="monotone"
                            dataKey={props.dataKey}
                            stroke={props.color}
                        />
                        <Line
                            type="monotone"
                            dataKey={props.dataKey}
                            stroke={props.color}
                        />
                    </LineChart>
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
