import { useState } from "react";
import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { FloatButton } from "antd";
import {
    FileImageOutlined,
    PlayCircleOutlined,
    PlusOutlined,
} from "@ant-design/icons";

function WritePage() {
    const [value, setValue] = useState("");

    return (
        <div className="writePage" style={{ height: "800px" }}>
            <div className="container">
                <div className="writePage__inner">
                    <div className="writePage__content">
                        <input
                            type="text"
                            placeholder="Title"
                            className="writePage__input"
                        />
                        <div className="writePage__editor">
                            <FloatButton.Group
                                trigger="click"
                                type=""
                                icon={<PlusOutlined />}
                            >
                                <FloatButton icon={<PlayCircleOutlined />} />
                                <FloatButton icon={<FileImageOutlined />} />
                            </FloatButton.Group>
                            <ReactQuill
                                className="textArea"
                                theme="bubble"
                                value={value}
                                onChange={setValue}
                                placeholder="Tell your story..."
                            />
                        </div>
                    </div>
                    <button className="btn writePage__btn">Publish</button>
                </div>
            </div>
        </div>
    );
}

export default WritePage;
