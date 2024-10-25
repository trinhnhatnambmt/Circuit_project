import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAdminTopics } from "~/services/apiServices";

function ManageTopic() {
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: "Topic",
            dataIndex: "topicName",
            key: "topicName",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
    ];

    const fetchDataTopic = async () => {
        const response = await getAdminTopics();
        setDataSource(response.data);
    };

    useEffect(() => {
        fetchDataTopic();
    }, []);
    return (
        <div className="manage__topic">
            <h1 className="manage__user-title">Manage Topic</h1>
            <Table
                dataSource={dataSource}
                columns={columns}
                style={{ marginTop: "10px" }}
            />
        </div>
    );
}

export default ManageTopic;
