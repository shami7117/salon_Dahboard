import UserApi from "../../lib/UsersApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Select, notification } from "antd";

const UserModal = (props) => {
    console.log("Updated User", props?.data);
    const queryClient = useQueryClient();
    const addMutation = useMutation(
        ["addUsers"],
        async (data) => {
            return await UserApi.addUser(data);
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
                queryClient.invalidateQueries(["addUsers"]);
                props.close();
            },


        }
    );

    const updateMutation = useMutation(
        ["updateUsers"],
        async ({ id, User }) => {
            await UserApi.updateUser(id, User);
        },
        {
            onError: (data) => { },
            onSuccess: () => {
                notification.open({
                    type: "success",
                    message: "User updated successfully",
                    placement: "top",
                });
                queryClient.invalidateQueries(["updateUsers"]);
                props.setData(null);
                props.close();
            },
        }
    );

    const handleSubmit = (values) => {

        console.log("values", values);
        // let slug = values.name
        //     .replace(/ /g, "-")
        //     .replace(/\?/g, "")
        //     .replace(/,/g, "")
        //     .replace(/"/g, "")
        //     .replace(/'/g, "")
        //     .toLowerCase();


        if (props.data) {
            updateMutation.mutate({
                id: props?.data?.id,
                User: values,
                // slug,
            });
        } else {
            addMutation.mutate(values);
            console.log("USER HAS BEEN ADDED")
        }
    };

    return (
        <Modal
            title={props?.data ? "Update User" : "Add New User"}
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
                        name="fName"
                        rules={[
                            {
                                required: true,
                                message: "Input First name",
                            },
                        ]}
                    >
                        <Input placeholder="First name" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="lName"
                        rules={[
                            {
                                required: true,
                                message: "Input last name",
                            },
                        ]}
                    >
                        <Input placeholder="Last name" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "input Email ",
                            },
                        ]}
                    >
                        <Input placeholder="Email" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "input Phone ",
                            },
                        ]}
                    >
                        <Input placeholder="Phone" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: "input Gender ",
                            },
                        ]}
                    >
                        <Select placeholder="Gender" style={{ width: "100%" }} >
                            <Option value="Male" label="Male">Male</Option>
                            <Option value="Female" label="Female">Female</Option>
                            <Option value="Prefer not to say" label="Prefer not to say">Prefer not to say</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item
                        style={{ width: "100%" }}
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: "input Role ",
                            },
                        ]}
                    >
                        <Input placeholder="Role" style={{ width: "100%" }} />
                    </Form.Item>


                    <Form.Item
                        style={{ width: "100%" }}
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: "input City ",
                            },
                        ]}
                    >
                        <Input placeholder="City" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "100%" }}
                        name="postCode"
                        rules={[
                            {
                                required: true,
                                message: "input Post Code ",
                            },
                        ]}
                    >
                        <Input placeholder="Post Code" style={{ width: "100%" }} />
                    </Form.Item>


                    <Form.Item
                        style={{ width: "100%" }}
                        name="promotion"
                        rules={[
                            {
                                required: false,
                                message: "input Promotion ",
                                type: Boolean
                            },
                        ]}
                    >
                        <Select placeholder="Promotion" style={{ width: "100%" }} >
                            <Option value="true" label="true">true</Option>
                            <Option value="false" label="false">false</Option>
                        </Select>
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

export default UserModal;
