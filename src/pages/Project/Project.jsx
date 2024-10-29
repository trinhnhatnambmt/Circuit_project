import { Table, Tag } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { render } from "sass";
import { format } from "date-fns";
function Project() {
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: "Topic",
            dataIndex: "topicName",
            key: "topicName",
        },

        {
            title: "Started date",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date) => (
                <Tag color="green">{format(new Date(date), "dd/MM/yyyy")}</Tag>
            ),
        },
        {
            title: "Updated date",
            dataIndex: "updatedAt",
            key: "updatedAt",
            render: (date) => (
                <Tag color="purple">{format(new Date(date), "dd/MM/yyyy")}</Tag>
            ),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
    ];

    const fetchDataTopic = async () => {
        const res = await axios.get("http://167.71.220.5:8080/topic/view");
        setDataSource(res.data);
    };

    useEffect(() => {
        fetchDataTopic();
    }, []);

    return (
        <div className="project">
            <div className="container">
                <h1 className="project__title">Project</h1>
                <p
                    className="project__desc"
                    style={{
                        borderBottom: "1px solid #d2d1d6",
                        paddingBottom: "20px",
                    }}
                >
                    All projects during the semester and all projects
                    contributed by the mentor
                </p>

                <div className="project__content">
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        style={{ marginTop: "30px" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
