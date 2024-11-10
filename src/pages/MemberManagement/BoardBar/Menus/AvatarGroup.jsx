import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import { mentor } from "~/assets/image";

function AvatarGroup({ members }) {
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
                {members.map((member, index) => (
                    <Avatar src={member.accountAvatar} key={index} />
                ))}
            </Avatar.Group>
        </div>
    );
}

export default AvatarGroup;
