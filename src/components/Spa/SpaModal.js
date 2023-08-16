// import SPAApi from "@/lib/SPA";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, notification } from "antd";
import BusinessApi from "@/lib/Business";


const SPAModal = (props) => {
    console.log("SPA", props.data);
    const queryClient = useQueryClient();
    const addMutation = useMutation(
        ["businesses"],
        async (data) => {
            return await BusinessApi.addBusiness(data);
        },
        {
            onError: (data) => { },
            onSuccess: (data) => {
                console.log("data in api", data);
                notification.open({
                    type: data?.code === 1 ? "success" : "error",
                    message: data?.message,
                    placement: "top",
                });
                queryClient.invalidateQueries(["businesses"]);
                props.close();
            },
        }
    );

    console.log("MODEL UPDATE DATA", props)

    const updateMutation = useMutation(
        ["businesses"],
        async ({ id, SPA }) => {
            await BusinessApi.updateBusiness(id, SPA);
        },
        {
            onError: (data) => { },
            onSuccess: () => {
                notification.open({
                    type: "success",
                    message: "SPA updated successfully",
                    placement: "top",
                });
                queryClient.invalidateQueries(["businesses"]);
                props.setData(null);
                props.close();
            },
        }
    );




    const handleSubmit = (values) => {
        console.log("values", values);
        let slug = values.name
            .replace(/ /g, "-")
            .replace(/\?/g, "")
            .replace(/,/g, "")
            .replace(/"/g, "")
            .replace(/'/g, "")
            .toLowerCase();
        if (props.data) {
            updateMutation.mutate({
                id: props?.data?.id,
                SPA: values,
                // slug,
            });
        } else {
            addMutation.mutate(values);
        }
    };

    return (
        <Modal
            title={props?.data ? "Update SPA" : "Add New SPA"}
            open={props.show}
            footer={null}
            onCancel={() => {
                props.setData(null);
                props.close();
            }}
        >
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <Form
                    size="large"
                    name="basic"
                    initialValues={{
                        name: props?.data?.name ? props?.data?.name : "",
                    }}
                    onFinish={handleSubmit}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <Form.Item
                        style={{ width: "100%" }}
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Input SPA name",
                            },
                        ]}
                    >
                        <Input placeholder="Name" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="businessName"
                        rules={[
                            {
                                required: true,
                                message: "Input Business name",
                            },
                        ]}
                    >
                        <Input placeholder="Business Name" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Input Email ",
                            },
                        ]}
                    >
                        <Input placeholder="Email " style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="postCode"
                        rules={[
                            {
                                required: true,
                                message: "Input Post Code ",
                            },
                        ]}
                    >
                        <Input placeholder="Post Code " style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: "Input City name",
                            },
                        ]}
                    >
                        <Input placeholder="City Name" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="businessContact"
                        rules={[
                            {
                                required: true,
                                message: "Input Business Contact ",
                            },
                        ]}
                    >
                        <Input placeholder="Business Contact " style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="contactNumber"
                        rules={[
                            {
                                required: true,
                                message: "Input Contact Number",
                            },
                        ]}
                    >
                        <Input placeholder="Contact NUmber" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: "Input Category name",
                            },
                        ]}
                    >
                        <Input placeholder="Category Name" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="numberEmployees"
                        rules={[
                            {
                                required: true,
                                message: "Input number of Employees ",
                            },
                        ]}
                    >
                        <Input placeholder="Employees" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="province"
                        rules={[
                            {
                                required: true,
                                message: "Input Province name",
                            },
                        ]}
                    >
                        <Input placeholder="Province Name" style={{ width: "100%" }} />
                    </Form.Item>


                    <Form.Item
                        style={{ width: "100%" }}
                        name="websiteLink"
                        rules={[
                            {
                                required: false,
                                message: "Input Website Link ",
                            },
                        ]}
                    >
                        <Input placeholder="Website Link " style={{ width: "100%" }} />
                    </Form.Item>


                    <Form.Item
                        style={{ width: "100%" }}
                        name="businessType"
                        rules={[
                            {
                                required: true,
                                message: "Input Business Type ",
                            },
                        ]}
                    >
                        <Input placeholder="Business Type " style={{ width: "100%" }} />
                    </Form.Item>

                    {/* <Form.Item
                        style={{ width: "100%" }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Input Email name",
                            },
                        ]}
                    >
                        <Input placeholder="Email Name" style={{ width: "100%" }} />
                    </Form.Item> */}

                    <Form.Item
                        style={{ width: "100%" }}
                        name="businessAddress"
                        rules={[
                            {
                                required: true,
                                message: "Input Address ",
                            },
                        ]}
                    >
                        <Input placeholder="Address " style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className="btn-primary"
                            size="large"
                            type="primary"
                            htmlType="submit"
                        >
                            {addMutation.isLoading || updateMutation.isLoading
                                ? "Submitting..."
                                : "Submit"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default SPAModal;
