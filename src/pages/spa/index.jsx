import { Button, Space, Table, Input, Tag, Popconfirm, Modal, notification } from "antd";
import Head from "next/head";
import Image from "next/image";
import { AiFillFilter } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';
import BusinessApi from "../../lib/Business.js";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const data = [
  {
    key: "1",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "2",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "3",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "4",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "3",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "4",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "3",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
  {
    key: "4",
    service: "Body Temple Beauty",
    address: "123 rue Sherbrooke, Montreal, QC",
    type: "waxing",
    price: "30$",
    date: "November 29,2021",
    time: "12-1PM",
    name: "John Brown"
  },
];
import dynamic from "next/dynamic";
import { useState } from "react";
const SpaModal = dynamic(() =>
  import("../../components/Spa/SpaModal")
);
const FilterModal = dynamic(() =>
  import("../../components/FilterModel/Filter.js")
);





const Index = () => {
  const [showSpaModal, setShowSpaModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [category, setCategory] = useState();
  console.log("PREVOIUS", category)

  const deleteMutation = useMutation(
    ["deleteBusinesses"],
    async (id) => {
      await BusinessApi.deleteBusiness(id);
    },
    {
      onError: (data) => { },
      onSuccess: () => {
        notification.open({
          type: "success",
          message: "User deleted successfully",
          placement: "top",
        });
        queryClient.invalidateQueries(["deleteBusinesses"]);
      },
    }
  );


  const columns = [
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">#</span>
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
          <span className="text-base font-lato font-medium whitespace-nowrap">Name</span>
        </div>
      ),
      dataIndex: "name",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.name}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Business Name</span>
        </div>
      ),
      dataIndex: "name",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.businessName}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Category</span>
        </div>
      ),
      dataIndex: "name",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.category}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Email</span>
        </div>
      ),
      dataIndex: "service",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.email}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Address</span>
        </div>
      ),
      dataIndex: "Address",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.businessAddress}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Employees</span>
        </div>
      ),
      dataIndex: "Time",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.numberEmployees}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Province</span>
        </div>
      ),
      dataIndex: "Time",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.province}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Contact</span>
        </div>
      ),
      dataIndex: "Time",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.contactNumber}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Business No.</span>
        </div>
      ),
      dataIndex: "Time",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.businessContact}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Business Type</span>
        </div>
      ),
      dataIndex: "Time",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.businessType}
          </span>
        </div>
      ),
    },

    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">City</span>
        </div>
      ),
      dataIndex: "date",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.city}
          </span>
        </div>
      ),
    },

    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Post Code</span>
        </div>
      ),
      dataIndex: "date",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.postCode}
          </span>
        </div>
      ),
    },

    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Website link</span>
        </div>
      ),
      dataIndex: "date",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.websiteLink}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-lato font-medium whitespace-nowrap">Actions</span>
        </div>
      ),
      key: "actions",
      render: (record) => {
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
                    onClick={() => {
                      setCategory(record);
                      setShowSpaModal(true);
                    }}
                  >
                    <Image
                      src={"/images/edit_icon1.svg"}
                      width={18}
                      height={18}
                    />
                    Edit Details
                  </Button>
                  <Button
                    onClick={() => {
                      Modal.confirm({
                        title: "Confirm",
                        icon: <ExclamationCircleOutlined />,
                        content:
                          "Are you sure you want to delete this Business?",
                        okText: "Delete",
                        cancelText: "Cancel",
                        okType: "danger",
                        onOk: () => {
                          deleteMutation.mutate(record?.id);
                        },
                      });
                    }}
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



  const { data, isLoading, isError } = useQuery(
    ["Business"],
    async () => {
      const data = await BusinessApi.getBusinesses();
      return data;
    },
    // {
    //   initialData: Business,
    // }
  );
  console.log("SPA", data)

  if (isLoading) {
    return <h1 className="semibold text-[20px]">Loading...</h1>
  }
  if (isError) {
    return <h1>{isError}</h1>
  }

  return (
    <div>
      {showSpaModal && (
        <SpaModal
          show={showSpaModal}
          close={() => {
            setShowSpaModal(false);
          }}
          data={category}
          setData={setCategory}
        />
      )}

      {showFilterModal && (
        <FilterModal
          show={showFilterModal}
          close={() => {
            setShowFilterModal(false);
          }}
        // data={category}
        // setData={setCategory}
        />
      )}
      <Head>
        <title>Spa</title>
      </Head>
      <h2 className="text-2xl font-lato font-medium">SPA</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <div className="flex space-y-4 md:space-y-0 sm:space-x-4 flex-col sm:flex-row items-start sm:items-end justify-between pb-5">
            <div className="flex w-full justify-between items-center">
              <Search
                placeholder="Search SPA"
                allowClear
                size="large"
                onSearch={(value) => setSearchedText(value)}
                onChange={(e) => setSearchedText(e.target.value)}
                className="searchBar w-full lg:w-[18rem]"
              ></Search>

              {/* <Button
                className="btn-primary inline md:hidden ml-4  bg-[#F26A5A]  font-lato hover:bg-transparent"
                type="primary"
                size="large"
                onClick={() => setShowFilterModal(true)}
              >
                <AiFillFilter />

              </Button> */}
            </div>

            <div className="w-[100%] flex sm:justify-end">
              {/* <Button
                className="btn-primary hidden md:inline  bg-[#F26A5A] mr-4 font-lato hover:bg-transparent"
                type="primary"
                size="large"
                icon={<AiFillFilter />}
                onClick={() => setShowFilterModal(true)}
              >
                Filter

              </Button> */}
              <Button
                className="btn-primary  w-[100%] sm:w-[160px] bg-[#F26A5A] font-lato self-end hover:bg-[#F26A5A]"
                type="primary"

                size="large"
                onClick={() => setShowSpaModal(true)}
              >
                +   Add SPA
              </Button>
            </div>


          </div>
        </div>
        <Table
          // loading={isLoading}
          className="hidden md:block"
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1500 }}
        />
        {/* Cards for Mobile */}
        {data?.map((item) => {
          return <div className="bg-[#FBEFEF] flex flex-col items-between justify-center md:hidden p-5 rounded-[10px] ">

            {/* 1st start*/}
            <div className="flex py-2 border-b-solid text-[#777777] border-b-[1px] border-b-[#ffffff] justify-between items-center">
              <h6 className="text-[12px]">
                Name<br /><p className="text-[#000000] ">{item?.name}</p>
              </h6>
              <h6>
                Business <br /><p className="text-[#000000]">{item?.businessName}</p>
              </h6>
              <h6>
                Category <br /><p className="text-[#000000]">{item?.category}</p>
              </h6>
              <Popconfirm
                className=" self-center "

                placement="right"
                title={
                  <div className="flex flex-col">

                    <Button
                      type="link"
                      className="flex items-center space-x-2 text-[#2f9379] font-lato"
                      onClick={() => {
                        setCategory(item);
                        setShowSpaModal(true);
                      }}
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
                      onClick={() => {
                        Modal.confirm({
                          title: "Confirm",
                          icon: <ExclamationCircleOutlined />,
                          content:
                            "Are you sure you want to delete this product?",
                          okText: "Delete",
                          cancelText: "Cancel",
                          okType: "danger",
                          onOk: () => {
                            deleteMutation.mutate(record?.id);
                          },
                        });
                      }}
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
                <CiCircleMore size={24} color="#777777"
                />
              </Popconfirm>
            </div>
            {/* 1st end */}

            {/* 2nd start*/}
            <div className="flex py-2 border-b-solid border-b-[1px]  border-b-[#ffffff] justify-between items-center text-[#777777]">
              <h6>
                Address<br /><p className="text-[#000000]">{item?.businessAddress}</p>
              </h6>

              <h6>
                Email <br /><p className="text-[#000000]">{item?.email}</p>
              </h6>
            </div>
            {/* 2nd end */}

            {/* 3rd start*/}
            <div className="flex py-2 border-b-solid border-b-[1px] border-b-[#ffffff] justify-between items-center text-[#777777]">
              <h6>

                Employees <br /><p className="text-[#000000]">{item?.numberEmployees}</p>
              </h6>

              <h6>
                Contact<br /><p className="text-[#000000]">{item?.contactNumber}</p>
              </h6>
              <h6>
                Province<br /><p className="text-[#000000]">{item?.province}</p>
              </h6>
            </div>
            {/* 3rd end */}

            {/* 4th start*/}
            <div className="flex pt-2  justify-between items-center text-[#777]">
              <h6>
                Website Link<br /><p className="text-[#000000]">{item?.websiteLink}</p>
              </h6>
              <h6>
                Business No.<br /><p className="text-[#000000]">{item?.businessContact}</p>
              </h6>
            </div>
            {/* 4th end */}


          </div>
        })}
        {/* Cards for Mobile */}
      </div>
    </div>
  );
};

export default Index;