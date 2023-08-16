import OrderApi from "@/lib/order";
import { useQuery } from "@tanstack/react-query";
import { Button, Space, Table, Input, Tag, Popconfirm } from "antd";
import Head from "next/head";
import Image from "next/image";

const { Search } = Input;

const data = [
  {
    key: "1",
    name: "John Brown",
    phone: "20934582938",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "2",
    name: "John Brown",
    phone: "39872398233",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "3",
    name: "John Brown",
    phone: "30298539482",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "4",
    name: "John Brown",
    phone: "243523489529",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "3",
    name: "John Brown",
    phone: "23450239485",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "4",
    name: "John Brown",
    phone: "409528304923",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "3",
    name: "John Brown",
    phone: "2049852349234",
    country: "USA",
    date: "13 Spt 2023",
  },
  {
    key: "4",
    name: "John Brown",
    phone: "092450234943",
    country: "USA",
    date: "13 Spt 2023",
  },
];

const Index = () => {
  
  console.log({data})
  const columns = [
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">#</span>
        </div>
      ),
      dataIndex: "no",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.number}1
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Name</span>
        </div>
      ),
      dataIndex: "name",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.name}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Country</span>
        </div>
      ),
      dataIndex: "country",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.country}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Role</span>
        </div>
      ),
      dataIndex: "country",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.country}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Managed Tabs</span>
        </div>
      ),
      dataIndex: "country",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.country}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Phone</span>
        </div>
      ),
      dataIndex: "phone",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.phone}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Date</span>
        </div>
      ),
      dataIndex: "date",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.date}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-lato font-medium">Actions</span>
        </div>
      ),
      key: "actions",
      render: () => {
        return (
          <div className="flex items-center justify-center">
            <Popconfirm
              placement="left"
              title={
                <div className="flex flex-col">
                  {/* <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-poppins hover:text-[#2f9379]"
                  >
                    <Image src={"/images/eye.svg"} width={18} height={18} />
                    View Details
                  </Button> */}
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-lato"
                  >
                    <Image
                      src={"/images/edit_icon1.svg"}
                      width={18}
                      height={18}
                    />
                    Edit Details
                  </Button>
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#D94B38] font-lato"
                  >
                    <Image
                      src={"/images/delete.svg"}
                      width={18}
                      height={18}
                    />
                    Delete
                  </Button>
                </div>
              }
              description=""
              // onConfirm={confirm}
              icon={null}
            >
              <Image
                className="cursor-pointer"
                src={"/images/more_icon.svg"}
                width={24}
                height={24}
              />
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Head>
        <title>Roles</title>
      </Head>
      <h2 className="text-2xl font-lato font-medium">Roles</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <Space className="flex items-center pb-5">
            <Search
              placeholder="Search Order"
              allowClear
              size="large"
              className="searchBar w-52 md:w-[18rem]"
            />
          </Space>
        </div>
        <Table
          // loading={isLoading}
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1000}}
        />
      </div>
    </div>
  );
};

export default Index;