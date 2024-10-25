import React, { useEffect, useState } from "react";
import { Dropdown, Button, Menu, Input, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { getAllSpecialization } from "~/services/apiServices";

const { Option } = Select;

const FilterDropdown = ({ onApply }) => {
    const [visible, setVisible] = useState(false);
    const [specializations, setSpecializations] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [name, setName] = useState("");
    const [selectedSpecialization, setSelectedSpecialization] =
        useState("SCIENCE");

    const fetchSpecialization = async () => {
        const response = await getAllSpecialization();
        setSpecializations(response.data);
    };

    useEffect(() => {
        fetchSpecialization();
    }, []);

    const handleApply = () => {
        onApply({
            name,
            minPrice,
            maxPrice,
            specializations: selectedSpecialization,
        });
        setVisible(false);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <div>
                    <label style={{ fontWeight: "bold" }}>Price Range</label>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "10px",
                        }}
                    >
                        <Input
                            placeholder="Min price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <Input
                            placeholder="Max price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />

            {/* Filter activity type */}
            <Menu.Item key="2">
                <div style={{ width: "100%" }}>
                    <label style={{ fontWeight: "bold" }}>
                        Specializations
                    </label>
                    <Select
                        placeholder="Select specializations..."
                        style={{ width: "100%", marginTop: "10px" }}
                        value={selectedSpecialization}
                        onChange={(value) => setSelectedSpecialization(value)}
                    >
                        {specializations &&
                            specializations.length > 0 &&
                            specializations.map((specialization) => (
                                <Option
                                    key={specialization.id}
                                    value={specialization}
                                >
                                    {specialization}
                                </Option>
                            ))}
                    </Select>
                </div>
            </Menu.Item>
            <Menu.Divider />

            {/* Keyword Search */}
            <Menu.Item key="4">
                <div style={{ width: "100%" }}>
                    <label style={{ fontWeight: "bold" }}>Name of mentor</label>
                    <Input
                        placeholder="Enter name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginTop: "10px" }}
                    />
                </div>
            </Menu.Item>
            <Menu.Divider />

            {/* Apply button */}
            <Menu.Item key="5">
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Button
                        type="default"
                        onClick={() => {
                            setMinPrice("");
                            setMaxPrice("");
                            setName("");
                            setSelectedSpecialization("");
                        }}
                    >
                        Reset all
                    </Button>
                    <Button
                        type="primary"
                        style={{
                            marginLeft: "10px",
                            backgroundColor: "var(--text-color)",
                        }}
                        onClick={handleApply}
                    >
                        Apply now
                    </Button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={["click"]}
            visible={visible}
            onVisibleChange={(flag) => setVisible(flag)}
        >
            <Button
                icon={<FilterOutlined />}
                type="primary"
                style={{
                    backgroundColor: "var(--text-color)",
                }}
            >
                Filter
            </Button>
        </Dropdown>
    );
};

export default FilterDropdown;
