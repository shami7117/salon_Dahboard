import { Button, Space, Table, Input, Tag, Popconfirm } from "antd";
import Head from "next/head";
import Image from "next/image";
import { AiFillFilter } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';

const { Search } = Input;
import { useState } from "react";

import dynamic from "next/dynamic";

const ServiceModal = dynamic(() =>
    import("../../components/Service/ServiceModal")
);
const FilterModal = dynamic(() =>
    import("../../components/FilterModel/Filter.js")
);

const data = [
    {
        key: "1",
        name: "John Brown",
        phone: "20934582938",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "2",
        name: "John Brown",
        phone: "39872398233",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "3",
        name: "John Brown",
        phone: "30298539482",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "4",
        name: "John Brown",
        phone: "243523489529",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "3",
        name: "John Brown",
        phone: "23450239485",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "4",
        name: "John Brown",
        phone: "409528304923",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "3",
        name: "John Brown",
        phone: "2049852349234",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
    {
        key: "4",
        name: "John Brown",
        phone: "092450234943",
        country: "USA",
        gender: "female",
        date: "13 Spt 2023",
    },
];

const Index = () => {
    const [showServiceModal, setShowServiceModal] = useState(false);
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
                    <span className="text-base font-lato font-medium">Service name</span>
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
                    <span className="text-base font-lato font-medium">Specialist name</span>
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
                    <span className="text-base font-lato font-medium">Amount</span>
                </div>
            ),
            dataIndex: "phone",
            sorter: (a, b) => a.age - b.age,
            render: (_, record) => (
                <div className="w-full">
                    <span className="text-base font-lato font-normal text-[#777777]">
                        {record?.gender}
                    </span>
                </div>
            ),
        },
        {
            title: (
                <div className="flex items-center space-x-4">
                    <span className="text-base font-lato font-medium">Description</span>
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
            {showServiceModal && (
                <ServiceModal
                    show={showServiceModal}
                    close={() => {
                        setShowServiceModal(false);
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
                <title>Services</title>
            </Head>
            <h2 className="text-2xl font-lato font-medium">Services</h2>
            <div className="tableWrapper">
                <div className="categoryHeader">
                    <div className="flex space-y-4 md:space-y-0 sm:space-x-4 flex-col sm:flex-row items-start sm:items-end justify-between pb-5">
                        <div className="flex w-full justify-between items-center">
                            <Search
                                placeholder="Search Services"
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
                                onClick={() => setShowServiceModal(true)}
                            >
                                +   Add Services
                            </Button>
                        </div>

                    </div>
                </div>
                <Table
                    className="hidden md:block"
                    // loading={isLoading}
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
                                Service name<br /><p className="text-[#000000] ">James</p>
                            </h6>
                            <h6>

                                Specialist name<br /><p className="text-[#000000]">+1 212331</p>
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
                                Amount<br /><p className="text-[#000000]">12 September 23</p>
                            </h6>

                            <h6>
                                Description<br /><p className="text-[#000000]">USA</p>
                            </h6>
                        </div>



                    </div>
                })}
                {/* Cards for Mobile */}
            </div>
        </div>
    );
};

export default Index;