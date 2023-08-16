import { Button, Space, Table, Input, Tag, Popconfirm } from "antd";
import Head from "next/head";
import Image from "next/image";
import { AiFillFilter } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';
import dynamic from "next/dynamic";
import { useState } from "react";
const PromoModal = dynamic(() =>
  import("../../components/Promo/PromoModal")
);
const FilterModal = dynamic(() =>
  import("../../components/FilterModel/Filter.js")
);
const { Search } = Input;

const data = [
  {
    key: "1",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "2",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "3",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "4",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "3",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "4",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "3",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
  {
    key: "4",
    code: "394857",
    issue_date: "July 29, 2023",
    status: "Active",
    service: "Hair, Nails, Body",
    end_date: "August 10, 2023",
  },
];

const Index = () => {
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  console.log({ data })
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
          <span className="text-base font-lato font-medium">Promo Code</span>
        </div>
      ),
      dataIndex: "promo code",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.code}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Status</span>
        </div>
      ),
      dataIndex: "status",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <Tag className="text-base font-lato font-normal" color="#F26A5A">
            {record.status}
          </Tag>
        </div>
      ),
    },
    ,
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Services</span>
        </div>
      ),
      dataIndex: "service",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.service}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Issue Date</span>
        </div>
      ),
      dataIndex: "issue_date",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.issue_date}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">End Date</span>
        </div>
      ),
      dataIndex: "end_date",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.end_date}
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
      {showPromoModal && (
        <PromoModal
          show={showPromoModal}
          close={() => {
            setShowPromoModal(false);
          }}
        // data={category}
        // setData={setCategory}
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
        <title>promocode</title>
      </Head>
      <h2 className="text-2xl font-lato font-medium">Promocode</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <div className="flex space-y-4 md:space-y-0 sm:space-x-4 flex-col sm:flex-row items-start sm:items-end justify-between pb-5">
            <div className="flex w-full justify-between items-center">
              <Search
                placeholder="Search Promo"
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
                onClick={() => setShowPromoModal(true)}
              >
                +   Add Promo
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
          scroll={{ x: 1000 }}
        />
        {/* Cards for Mobile */}
        {[1, 2, 3, 4].map(() => {
          return <div className="bg-[#FBEFEF] flex flex-col items-between justify-center md:hidden p-5 rounded-[10px] ">

            {/* 1st start*/}
            <div className="flex py-2 border-b-solid text-[#777777] border-b-[1px] border-b-[#ffffff] justify-between items-center">
              <h6 className="text-[12px]">
                Promo Code<br /><p className="text-[#000000] ">384374</p>
              </h6>

              <h6>
                Services<br /><p className="text-[#000000]">Salon</p>
              </h6>
              <Popconfirm
                className=" self-center "

                placement="right"
                title={
                  <div className="flex flex-col">

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
                <CiCircleMore size={24} color="#777777"
                />
              </Popconfirm>
            </div>
            {/* 1st end */}

            {/* 2nd start*/}
            <div className="flex py-2 border-b-solid border-b-[1px]  border-b-[#ffffff] justify-between items-center text-[#777777]">
              <h6>
                Issue Date<br /><p className="text-[#000000]">12 july 22</p>
              </h6>
              <h6>
                Status<br /><p className="text-[#000000]"> <Tag className="text-base font-lato font-normal" color="#F26A5A">
                  Active
                </Tag></p>
              </h6>

              <h6>
                End Date<br /><p className="text-[#000000]">21 dec 24</p>
              </h6>
            </div>
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
    </div>
  );
};

export default Index;