import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import { mentor } from "~/assets/image";

function AvatarGroup() {
    return (
        <div className="avatarGroup">
            <Avatar.Group
                max={{
                    count: 3,
                    style: {
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                    },
                }}
            >
                <Avatar src={mentor} />
                <Avatar
                    style={{
                        backgroundColor: "#f56a00",
                    }}
                >
                    K
                </Avatar>
                <Tooltip title="Ant User" placement="top">
                    <Avatar
                        style={{
                            backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                    />
                </Tooltip>
                <Avatar
                    style={{
                        backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                />
            </Avatar.Group>
        </div>
    );
}

export default AvatarGroup;
