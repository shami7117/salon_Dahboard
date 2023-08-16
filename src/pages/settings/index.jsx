import { Avatar, Button, Form, Input, Upload, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { db, storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import authApi from "@/lib/authApi";

const index = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [form] = Form.useForm();
  const updateMutation = useMutation(
    ["user"],
    async (values) => {
      console.log("product in mutation", values);
      await authApi.updateProfile(data.id, values);
    },
    {
      onError: (data) => {},
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
  const { data, isLoading } = useQuery(["user"], async () => {
    const response = await (await fetch("/api/currentUser")).json();
    if (!response?.uid) {
      router.push("/signin");
    } else {
      const userRef = doc(db, "users", response.uid);
      const userRes = await getDoc(userRef);

      if (userRes.exists) {
        return { ...userRes.data(), id: userRes.id };
      }
    }
  });
  const profileImageMutation = useMutation(
    ["user"],
    async ({ url, userId }) => {
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, { profileImage: url }, { merge: true });
      return url;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const onFinish = (values) => {
    // Handle form submission
    console.log("Form submitted:", values);
    updateMutation.mutate(values);
  };

  const handleSubmit = () => {
    console.log("submit calling");
    form.submit();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-rows-2 py-5 h-[100vh] md:h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col space-y-2 items-center">
            <Upload
              className="border-0"
              maxCount={1}
              beforeUpload={(file) => {
                if (file.size > 1000000000000) {
                  document.getElementById("errorMsg").textContent =
                    "File size should be less than 100MB";
                  return Upload.LIST_IGNORE;
                }
              }}
              customRequest={(e) => {
                const imageRef = ref(
                  storage,
                  `profile_images/${e.file.name + e.file.uid}`
                );
                uploadBytes(imageRef, e.file).then((snapshot) => {
                  e.onSuccess("ok");
                  getDownloadURL(snapshot.ref).then(async (url) => {
                    // dispatch(updateProfileImage({ url, userId: user.id }));
                    profileImageMutation.mutate({ url, userId: data.id });
                  });
                });
              }}
              showUploadList={false}
            >
              <Avatar
                icon={<UserOutlined />}
                className="flex items-center justify-center"
                size={120}
                src={data?.profileImage ? data?.profileImage : ""}
              />
            </Upload>
            {/* <Button
              type="link"
              className="text-sm md:text-base font-medium font-poppins"
              style={{ textTransform: "capitalize", color: "#F49342" }}
            >
              Change
            </Button> */}
          </div>
          <span
            className="text-base md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#F26A5A" }}
          >
            {data?.name}
          </span>
        </div>
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              remember: true,
              name: data?.name || "",
              email: data?.email || "",
              phoneNo: data?.phoneNo || "",
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              className="flex flex-col space-y-2"
            >
              {/* <label
                className="block font-medium mb-2 text-sm md:text-xl"
              >
                Name
              </label> */}
              <Input
                placeholder="Name"
                className="text-sm md:text-lg border-2 border-black opacity-40 rounded-xl w-full py-3 md:py-3 px-3 leading-tight focus:outline-none text-black"
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              className="flex flex-col space-y-2"
            >
              {/* <label
                className="block font-medium mb-2 text-sm md:text-xl"
              >
                Email
              </label> */}
              <Input
                placeholder="Email"
                className="text-sm md:text-lg border-2 border-black opacity-40 rounded-xl w-full py-3 md:py-3 px-3 leading-tight focus:outline-none text-black"
              />
            </Form.Item>
            <Form.Item
              name="phoneNo"
              label="Phone No"
              className="flex flex-col space-y-2"
            >
              {/* <label
                className="block font-medium mb-2 text-sm md:text-xl"
              >
                Phone No
              </label> */}
              <Input
                placeholder="Phone no"
                className="text-sm md:text-lg border-2 border-black opacity-40 rounded-xl w-full py-3 md:py-3 px-3 leading-tight focus:outline-none text-black"
              />
            </Form.Item>
          </Form>
        </div>
        <div className="flex justify-start md:justify-center">
          <Button
            type="link"
            className="text-sm md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#F26A5A" }}
          >
            Change Password
          </Button>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <Button
          className="btn-primary bg-[#F26A5A] font-poppins hover:bg-[#F26A5A]"
          type="primary"
          size="large"
          onClick={() => handleSubmit()}
        >
          {updateMutation.isLoading ? "Updating..." : "Update"}
        </Button>
      </div>
    </div>
  );
};

export default index;
