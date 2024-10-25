import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAdminBlogs } from "~/services/apiServices";

function ManageBlog() {
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: "Author",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
    ];

    const fetchDataBlogs = async () => {
        const response = await getAdminBlogs();
        setDataSource(response.data);
    };

    useEffect(() => {
        fetchDataBlogs();
    }, []);
    return (
        <div className="manage__topic">
            <h1 className="manage__user-title">Manage Blogs</h1>
            <Table
                dataSource={dataSource}
                columns={columns}
                style={{ marginTop: "10px" }}
            />
        </div>
    );
}

export default ManageBlog;
