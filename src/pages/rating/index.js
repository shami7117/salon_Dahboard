import { Button, Space, Table, Input, Tag, Popconfirm, Rate } from "antd";
import Head from "next/head";
import Image from "next/image";
import { AiFillFilter } from 'react-icons/ai';
import { CiCircleMore } from 'react-icons/ci';


const { Search } = Input;

const data = [
    {
        key: "1",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "2",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "3",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "4",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "3",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "4",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "3",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
    {
        key: "4",
        code: "394857",
        issue_date: "July 29, 2023",
        end_date: "August 10, 2023",
    },
];

const Index = () => {

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
                    <span className="text-base font-lato font-medium">Rating</span>
                </div>
            ),
            dataIndex: "promo code",
            render: (_, record) => (
                <div className="w-full flex items-center">
                    {/* <span className="text-base font-lato font-normal text-[#777777]">
                        {record.code}
                    </span> */}
                    <Rate value={5} />
                </div>
            ),
        },
        {
            title: (
                <div className="flex items-center space-x-4">
                    <span className="text-base font-lato font-medium">Reviews</span>
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
                    <span className="text-base font-lato font-medium">Customer</span>
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
                    <span className="text-base font-lato font-medium">Salon</span>
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
                    <span className="text-base font-lato font-medium">Date Posted</span>
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
        // {
        //     title: (
        //         <div className="flex items-center space-x-4">
        //             <span className="text-base font-lato font-medium">End Date</span>
        //         </div>
        //     ),
        //     dataIndex: "end_date",
        //     sorter: (a, b) => a.age - b.age,
        //     render: (_, record) => (
        //         <div className="w-full">
        //             <span className="text-base font-lato font-normal text-[#777777]">
        //                 {record.end_date}
        //             </span>
        //         </div>
        //     ),
        // },
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
                <title>Ratings</title>
            </Head>
            <h2 className="text-2xl font-lato font-medium">Ratings</h2>
            <div className="tableWrapper">
                <div className="categoryHeader">
                    <div className="flex space-y-4 md:space-y-0 sm:space-x-4 flex-col sm:flex-row items-start sm:items-end justify-between pb-5">
                        <div className="flex w-full justify-between items-center">
                            <Search
                                placeholder="Search Ratings"
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
                            // onClick={() => setShowCategoryModal(true)}
                            >
                                Filter

                            </Button> */}
                            {/* <Button
                                className="btn-primary  w-[100%] sm:w-[160px] bg-[#F26A5A] font-lato self-end hover:bg-[#F26A5A]"
                                type="primary"

                                size="large"
                            >
                                + Add Ratings
                            </Button> */}
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
                                Rating<br /><p className="text-[#000000] ">                    <Rate value={5} />
                                </p>
                            </h6>
                            <h6>
                                Reviews<br /><p className="text-[#000000]">725</p>
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
                                Salon<br /><p className="text-[#000000]">394857</p>
                            </h6>
                            <h6>
                                Customers<br /><p className="text-[#000000]">394857</p>
                            </h6>
                            <h6>
                                Date Posted<br /><p className="text-[#000000]">12 Oct 23</p>
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