// import ServiceApi from "@/lib/Service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, notification } from "antd";

const ServiceModal = (props) => {
    console.log("Service", props.data);
    const queryClient = useQueryClient();
    const addMutation = useMutation(
        ["categories"],
        async (data) => {
            return await ServiceApi.addService(data);
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
                queryClient.invalidateQueries(["categories"]);
                props.close();
            },
        }
    );

    const updateMutation = useMutation(
        ["categories"],
        async ({ id, Service }) => {
            await ServiceApi.updateService(id, Service);
        },
        {
            onError: (data) => { },
            onSuccess: () => {
                notification.open({
                    type: "success",
                    message: "Service updated successfully",
                    placement: "top",
                });
                queryClient.invalidateQueries(["categories"]);
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
                Service: values.name,
                slug,
            });
        } else {
            addMutation.mutate({ ...values, slug });
        }
    };

    return (
        <Modal
            title={props?.data ? "Update Service" : "Add New Service"}
            open={props.show}
            footer={null}
            onCancel={() => {
                // props.setData(null);
                props.close();
            }}
        >
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <Form
                    size="large"
                    name="basic"
                    initialValues={{
                        name: props?.data?.name ? props.data.name : "",
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
                                message: "Input Service name",
                            },
                        ]}
                    >
                        <Input placeholder="Service name" style={{ width: "100%" }} />
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

export default ServiceModal;
