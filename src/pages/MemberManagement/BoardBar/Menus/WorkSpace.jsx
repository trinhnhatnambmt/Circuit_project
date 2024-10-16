import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";

function WorkSpace() {
    const menu = (
        <Menu style={{ width: "250px" }}>
            <Menu.Item key="5">
                <Link>Write Blog</Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link>My Blog</Link>
            </Menu.Item>
            <Menu.Divider />
        </Menu>
    );
    return (
        <div className="workSpace" style={{ marginTop: "2px" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
                <div
                    className="top-act__user"
                    onClick={(e) => e.preventDefault()}
                >
                    <Space
                        style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        WorkSpaces
                        <DownOutlined />
                    </Space>
                </div>
            </Dropdown>
        </div>
    );
}

export default WorkSpace;
