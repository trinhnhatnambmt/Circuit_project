import { Button } from "antd";
import "./index.scss";
import Recent from "./Menus/Recents";
import WorkSpace from "./Menus/WorkSpace";
import AvatarGroup from "./Menus/AvatarGroup";
import {
    SearchOutlined,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons";
function BoardBar() {
    return (
        <div className="boardBar">
            <div className="boardBar__left">
                <h1 className="boardBar-title">Member Management</h1>
                <WorkSpace />
                <Recent />
                <Button
                    type="primary"
                    style={{
                        color: "#333",
                        backgroundColor: "#b5ed3d",
                        fontWeight: "600",
                    }}
                >
                    Create
                </Button>
            </div>
            <div className="boardBar__right">
                <Button
                    type="primary"
                    icon={<UserAddOutlined style={{ fontSize: "16px" }} />}
                    style={{
                        color: "#333",
                        backgroundColor: "#b5ed3d",
                        fontWeight: "600",
                    }}
                >
                    Invite
                </Button>
                <AvatarGroup />
            </div>
        </div>
    );
}

export default BoardBar;
