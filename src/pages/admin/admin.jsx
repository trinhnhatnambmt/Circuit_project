import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
} from "../../components/admin/data";
import BarCharBox from "../../components/barChartBox/barCharBox";
import BigChartBox from "../../components/BigChartBox/BigChartBox";
import CharBox from "../../components/chartBox/CharBox";
import PieChartBox from "../../components/PieCharBox/PieCharBox";
import Topbox from "../../components/topBox/Topbox";
import "./index.scss";
function Admin() {
    return (
        <div className="admin">
            <div className="box box1">
                <Topbox />
            </div>
            <div className="box box2">
                <CharBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <CharBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                <PieChartBox />
            </div>
            <div className="box box5">
                <CharBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                {" "}
                <CharBox {...chartBoxRevenue} />
            </div>
            <div className="box box7">
                <BigChartBox />
            </div>
            <div className="box box8">
                <BarCharBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarCharBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
}

export default Admin;
