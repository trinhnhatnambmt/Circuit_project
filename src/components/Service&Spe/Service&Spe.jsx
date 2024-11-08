import { Button, Collapse, Divider, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import ServiceComponent from "./ServiceComponent/ServiceComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { fetchUserData } from "~/redux/features/user/userSlice";
import SpecializationComponent from "./SpecializationComponent/SpecializationComponent";
import { Option } from "antd/es/mentions";

function ServiceAndSpecialization() {
    const [form] = useForm();
    const accessToken = useSelector((state) => state.user.account.access_token);
    const userInfo = useSelector((state) => state.user.account.userInfo);
    const [selectedSpecialization, setSelectedSpecialization] =
        useState("SCIENCE");
    const [specializations, setSpecializations] = useState([]);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const servicePrice = userInfo.data.servicePrice;
    const serviceId = userInfo.data.serviceId;
    const specialization = userInfo.data.specializations;
    const dispatch = useDispatch();

    const handleOk = () => {
        form.submit();
    };
    const handleCreateService = async (values) => {
        try {
            const res = await axios.post(
                "http://167.71.220.5:8080/mentor/service/create",
                {
                    price: values.price,
                    description: values.description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(res.data.message);
            dispatch(fetchUserData(accessToken));
            form.resetFields();
        } catch (error) {
            console.error("Error calling API:", error);
        }
    };

    const handleUpdateService = async (values) => {
        try {
            const res = await axios.put(
                `http://167.71.220.5:8080/mentor/service/update/${serviceId}`,
                {
                    price: values.price,
                    description: values.description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(res.data.message);
            dispatch(fetchUserData(accessToken));
            setIsOpenModal(false);
            form.resetFields();
        } catch (error) {
            console.error("Error calling API:", error);
        }
        console.log(values);
    };

    useEffect(() => {
        if (isOpenModal) {
            form.setFieldsValue({
                price: servicePrice,
                id: serviceId,
            });
        }
    }, [isOpenModal, servicePrice, serviceId, form]);

    const fetchSpecialization = async () => {
        const response = await axios.get(
            "http://167.71.220.5:8080/mentor/specialization/get",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        setSpecializations(response.data.data);
    };

    useEffect(() => {
        fetchSpecialization();
    }, []);

    const handleUpdateSpecialization = async (values) => {
        const res = await axios.put(
            "http://167.71.220.5:8080/mentor/specialization/update",
            {
                enumList: [values.Specialization],
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        toast.success(res.data.message);
        form.resetFields();
    };

    return (
        <div className="personal-info">
            <h2
                className="personal-info__heading"
                style={{
                    borderBottom: "1px solid #d2d1d6",
                    paddingBottom: "10px",
                }}
            >
                Service and Specialization
            </h2>
            <Divider orientation="left">Service</Divider>
            <ServiceComponent servicePrice={servicePrice} />
            {servicePrice !== 0 && (
                <Button
                    style={{ marginTop: "10px" }}
                    onClick={() => setIsOpenModal(true)}
                >
                    Update Service
                </Button>
            )}
            <Modal
                title="Basic Modal"
                open={isOpenModal}
                onOk={handleOk}
                onCancel={() => setIsOpenModal(false)}
            >
                <Form
                    labelCol={{
                        span: 24,
                    }}
                    form={form}
                    onFinish={handleUpdateService}
                    initialValues={{
                        description: "aaaa",
                    }}
                >
                    <Form.Item label="Service" name="id" hidden>
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        label="Service"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: "Please input your new service!",
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item label="Service" name="description" hidden>
                        <Input name="description" />
                    </Form.Item>
                </Form>
            </Modal>
            <Collapse
                style={{ marginTop: "10px" }}
                items={[
                    {
                        key: "1",
                        label: "Service",
                        children: (
                            <Form
                                labelCol={{
                                    span: 24,
                                }}
                                form={form}
                                onFinish={handleCreateService}
                                initialValues={{
                                    description: "aaaa",
                                }}
                            >
                                <Form.Item
                                    label="Service"
                                    name="price"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your new service!",
                                        },
                                    ]}
                                >
                                    <Input type="number" />
                                </Form.Item>
                                <Form.Item
                                    label="Service"
                                    name="description"
                                    hidden
                                >
                                    <Input name="description" />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#b5ed3d",
                                            color: "#333",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        ),
                    },
                ]}
            />
            <Divider orientation="left">Specialization</Divider>
            <SpecializationComponent specialization={specialization} />
            <Collapse
                style={{ marginTop: "10px" }}
                items={[
                    {
                        key: "1",
                        label: "Specialization",
                        children: (
                            <Form
                                labelCol={{
                                    span: 24,
                                }}
                                form={form}
                                onFinish={handleUpdateSpecialization}
                                initialValues={{
                                    description: "aaaa",
                                }}
                            >
                                <Form.Item
                                    label="Specialization"
                                    name="Specialization"
                                >
                                    <Select
                                        placeholder="Select specializations..."
                                        style={{
                                            width: "100%",
                                            marginTop: "10px",
                                        }}
                                        value={selectedSpecialization}
                                        onChange={(value) =>
                                            setSelectedSpecialization(value)
                                        }
                                    >
                                        {specializations &&
                                            specializations.length > 0 &&
                                            specializations.map(
                                                (specialization) => (
                                                    <Option
                                                        key={specialization.id}
                                                        value={specialization}
                                                    >
                                                        {specialization}
                                                    </Option>
                                                )
                                            )}
                                    </Select>
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#b5ed3d",
                                            color: "#333",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default ServiceAndSpecialization;
