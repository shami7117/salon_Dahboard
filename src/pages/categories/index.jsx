import categoryApi from "../../lib/category";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button, Space, Table, Input, Popconfirm, Modal, notification } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AiFillFilter } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';
import {
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const CategoryModal = dynamic(() =>
  import("../../components/Categories/CategoryModal")
);
const FilterModal = dynamic(() =>
  import("../../components/FilterModel/Filter.js")
);


const { Search } = Input;

const Index = ({ categories }) => {
  const [searchedText, setSearchedText] = useState("");
  const [category, setCategory] = useState();

  const deleteMutation = useMutation(
    ["DeleteCategories"],
    async (id) => {
      await categoryApi.deleteCategory(id);
    },
    {
      onError: (data) => { },
      onSuccess: () => {
        notification.open({
          type: "success",
          message: "User deleted successfully",
          placement: "top",
        });
        queryClient.invalidateQueries(["DeleteCategories"]);
      },
    }
  );


  const { data, isLoading, isError } = useQuery(
    ["categories"],
    async () => {
      const data = await categoryApi.getCategories();
      return data;
    },
    {
      initialData: categories,
    }
  );
  console.log("data in index", data);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const columns = [
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-lato font-medium">#</span>
        </div>

      ),
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-lato font-normal text-[#474747]">
              {index + 1}
            </span>
          </div>
        );
      },
      sorter: (a, b) => a.index - b.index,

    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4 w-full">
          <span className="text-base font-lato font-medium">
            Category Name
          </span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return record?.name ? (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-lato font-normal text-[#474747]">
              {record?.name?.name

              }
            </span>
          </div>
        ) : (
          "N/A"
        );
      },
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-lato font-medium">Actions</span>
        </div>
      ),
      key: "actions",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center">
            <Popconfirm
              placement="left"
              title={
                <div className="flex flex-col">
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-lato"
                    onClick={() => {
                      setCategory(record);
                      setShowCategoryModal(true);
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
                    <Image src={"/images/delete.svg"} width={18} height={18} />
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
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  else if (isError) {
    return <h1>{isError}</h1>
  }

  return (
    <div>
      <Head>
        <title>Categories</title>
      </Head>
      <h2 className="text-2xl font-lato font-semibold">Categories</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <div className="flex space-y-4 md:space-y-0 sm:space-x-4 flex-col sm:flex-row items-start sm:items-end justify-between pb-5">
            <div className="flex w-full justify-between items-center">
              <Search
                placeholder="Search Category"
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
                onClick={() =>


                  setShowCategoryModal(true)}
              >
                +   Add Category
              </Button>
            </div>


          </div>
        </div>
        <Table
          loading={isLoading}
          className="hidden md:block"
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1000 }}
        />
        {/* Cards for Mobile */}
        {data?.map((item) => {
          return <div className="bg-[#FBEFEF] flex flex-col items-between justify-center md:hidden p-5 rounded-[10px] ">
            {console.log("NAME", item?.name)}
            {/* 1st start*/}
            <div className="flex py-2 border-b-solid text-[#777 777] border-b-[1px] border-b-[#ffffff] justify-between items-center">
              <h6 className="text-[12px]">
                Category Name<br /><p className="text-[#000000] ">{item?.name?.name}</p>
              </h6>
              {/* <h6>
                Business<br /><p className="text-[#000000]">Salon</p>
              </h6>
              <h6>
                Category<br /><p className="text-[#000000]">Salon</p>
              </h6> */}
              <Popconfirm
                className=" self-center "

                placement="right"
                title={
                  <div className="flex flex-col">

                    <Button
                      type="link"
                      onClick={() => {
                        setCategory(item);
                        setShowCategoryModal(true);
                      }}
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
                            deleteMutation.mutate(item?.id);
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
            {/* <div className="flex py-2 border-b-solid border-b-[1px]  border-b-[#ffffff] justify-between items-center text-[#777777]">
              <h6>
                Address<br /><p className="text-[#000000]">123 rue America, Los Angles</p>
              </h6>

              <h6>
                Employs<br /><p className="text-[#000000]">332</p>
              </h6>
            </div> */}
            {/* 2nd end */}

            {/* 3rd start*/}
            {/* <div className="flex py-2 border-b-solid border-b-[1px] border-b-[#ffffff] justify-between items-center text-[#777777]">
              <h6>
                Contact<br /><p className="text-[#000000]">123 rue America, Los Angles</p>
              </h6>

              <h6>
                Business<br /><p className="text-[#000000]">Salon</p>
              </h6>
              <h6>
                Province<br /><p className="text-[#000000]">LA</p>
              </h6>
            </div> */}
            {/* 3rd end */}

            {/* 4th start*/}
            {/* <div className="flex pt-2  justify-between items-center text-[#777]">
              <h6>
                Website Link<br /><p className="text-[#000000]">123 rue America, Los Angles</p>
              </h6>
            </div> */}
            {/* 4th end */}


          </div>
        })}
        {/* Cards for Mobile */}
      </div>
      {showCategoryModal && (
        <CategoryModal
          show={showCategoryModal}
          close={() => {



            setShowCategoryModal(false);
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
          data={category}
          setData={setCategory}
        />
      )}
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const categories = await categoryApi.getCategories();
  return { props: { categories } };
};
