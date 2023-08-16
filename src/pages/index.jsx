import TopCard from "@/components/Home/TopCard";
import { Avatar, Button, Select, Table, Tag, Popconfirm } from "antd";
import Calendar from 'react-calendar';
import Head from "next/head";
import { CiCircleMore } from 'react-icons/ci';

import Image from "next/image";
import { Chart, ArcElement } from 'chart.js'

import 'react-calendar/dist/Calendar.css';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Legend,
  CartesianGrid,
} from "recharts";

import { Doughnut } from 'react-chartjs-2';




const Chardata = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thur",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];





Chart.register(ArcElement);



const Index = () => {


  const columns = [
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-Lato font-medium">#</span>
        </div>
      ),
      dataIndex: "no",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.no}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-semibold">Customer Name</span>
        </div>
      ),
      dataIndex: "customer",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => {
        return (
          <div className="space-x-2">
            <span className="text-base font-lato font-normal text-[#777777]">
              {record?.name}
            </span>
          </div>
        );
      },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-semibold">Phone Number</span>
        </div>
      ),
      dataIndex: "service",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="space-x-2">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.number}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-semibold">Email</span>
        </div>
      ),
      dataIndex: "status",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="space-x-2">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.Email}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-semibold">Service</span>
        </div>
      ),
      dataIndex: "payment",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="space-x-2">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.service}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-semibold">Price</span>
        </div>
      ),
      dataIndex: "payment",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="space-x-2">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record?.Price}
          </span>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },
    {
      key: "2",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },
    {
      key: "3",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },
    {
      key: "4",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },
    {
      key: "5",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },
    {
      key: "6",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },
    {
      key: "7",
      name: "James Williams",
      no: "01",
      number: "+1 4556677777",
      Email: "James77@email.com",
      service: "Hair Cut",
      Price: "$678",
    },

  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="flex flex-col justify-center z-0 lg:space-x-5 xl:flex-row">
        {/* <h1 className="text-[24px] leading-[28px]">Dashboard</h1> */}
        {/* Left Container */}
        <div className="w-[100%] xl:w-[75%] ">
          <div className="flex w-full flex-wrap">

            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 lg:grid-cols-4 w-full gap-y-4 sm:gap-x-6 ">
              <div
                className="box w-[100%]  h-[210px] rounded-[10px]  bg-[#FFFFFF]"
                style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
              >
                <div className="flex  flex-col items-center justify-center h-full">
                  <Image
                    src={"/images/stars.svg"}
                    alt="/"
                    width={200}
                    height={200}
                    className="w-[68px] h-[68px]"
                  />
                  <p
                    className="text-center font-semibold text-[18px] md:text-[20px] mt-2"
                    style={{
                      lineHeight: "24px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }}
                  >
                    Clients
                  </p>
                  <p
                    className="text-center font-bold text-[20px] md:text-[24px] mt-1"
                    style={{
                      lineHeight: "28px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#000000",
                    }}
                  >
                    2000
                  </p>
                  <p
                    className="text-center text-[14px] md:text-[16px] mt-1"
                    style={{
                      lineHeight: "19px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#288990",
                    }}
                  >
                    18 July 2023
                  </p>
                </div>
              </div>

              <div
                className="box w-[100%]  h-[210px] rounded-[10px]  bg-[#FFFFFF]"
                style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={"/images/app.svg"}
                    alt="/"
                    width={200}
                    height={200}
                    className="w-[68px] h-[68px]"
                  />
                  <p
                    className="text-center font-semibold text-[18px] md:text-[20px] mt-2"
                    style={{
                      lineHeight: "24px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }}
                  >
                    Appointments
                  </p>
                  <p
                    className="text-center font-bold text-[20px] md:text-[24px] mt-1"
                    style={{
                      lineHeight: "28px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#000000",
                    }}
                  >
                    2000
                  </p>
                  <p
                    className="text-center text-[14px] md:text-[16px] mt-1"
                    style={{
                      lineHeight: "19px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#288990",
                    }}
                  >
                    18 July 2023
                  </p>
                </div>
              </div>

              <div
                className="box w-[100%] h-[210px] rounded-[10px]  bg-[#FFFFFF]"
                style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={"/images/stars.svg"}
                    alt="/"
                    width={200}
                    height={200}
                    className="w-[68px] h-[68px]"
                  />
                  <p
                    className="text-center font-semibold text-[18px] md:text-[20px] mt-2"
                    style={{
                      lineHeight: "24px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }}
                  >
                    Clients
                  </p>
                  <p
                    className="text-center font-bold text-[20px] md:text-[24px] mt-1"
                    style={{
                      lineHeight: "28px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#000000",
                    }}
                  >
                    2000
                  </p>
                  <p
                    className="text-center text-[14px] md:text-[16px] mt-1"
                    style={{
                      lineHeight: "19px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#288990",
                    }}
                  >
                    18 July 2023
                  </p>
                </div>
              </div>

              <div
                className="box w-[100%] mb-4 sm:mb-0  h-[210px] rounded-[10px]  bg-[#FFFFFF]"
                style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    src={"/images/treat.svg"}
                    alt="/"
                    width={200}
                    height={200}
                    className="w-[68px] h-[68px]"
                  />
                  <p
                    className="text-center font-semibold text-[18px] md:text-[20px] mt-2"
                    style={{
                      lineHeight: "24px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }}
                  >
                    Treatment
                  </p>
                  <p
                    className="text-center font-bold text-[20px] md:text-[24px] mt-1"
                    style={{
                      lineHeight: "28px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#000000",
                    }}
                  >
                    2000
                  </p>
                  <p
                    className="text-center text-[14px] md:text-[16px] mt-1"
                    style={{
                      lineHeight: "19px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#288990",
                    }}
                  >
                    18 July 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row justify-between w-full lg:space-x-4 ">
              <div
                className=" w-[100%] py-2 px-2 md:px-6    lg:w-[70%] flex flex-col justify-between items-start md:items-center h-[full sm:mt-3  rounded-[10px] bg-[#FFFFFF]"
                style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
              >
                <div className="flex flex-col md:flex-row  justify-between w-full items-center">
                  <h6 className="whitespace-nowrap  mr-2" style={{
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontFamily: "'Lato', sans-serif",
                    color: "#000000",
                  }}>Overall Appointments</h6>
                  <div className="flex whitespace-nowrap my-2 md:my-0 justify-center space-x-2 items-center">
                    <div className="bg-[#F26A5A] w-[14px] h-[14px] rounded-[50%] ">
                    </div>
                    <h6 style={{
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }}>Last Week</h6>
                    <div className="bg-[#155264] w-[14px] h-[14px] rounded-[50%] ">
                    </div>
                    <h6 style={{
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }}>This Week</h6>

                    <select style={{
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontFamily: "'Lato', sans-serif",
                      color: "#777777",
                    }} className="outline-none bg-none">
                      <option >This Week</option>
                      <option >Last Week</option>
                    </select>
                  </div>
                </div>
                <ResponsiveContainer className={"flex justify-center items-center"} maxHeight={"200px"} width={"100%"} height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={Chardata}
                    margin={{
                      top: 5,
                      right: 30,

                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div
                className="box w-[100%] py-4 flex flex-col justify-center items-center  lg:w-[30%] h-64 mt-3  px-5 py-5 rounded-[10px] bg-[#FFFFFF] relative"
                style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
              >
                <h1 className="text-[#000000] self-start mb-2 text-[18px] font-medium">Total Earning</h1>
                <ResponsiveContainer className={"flex justify-center items-center "} maxHeight={"70%"} width={"70%"} height="70%">
                  <Doughnut
                    const data={{
                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                      datasets: [
                        {
                          label: '# of Votes',
                          data: [45, 45, 10],
                          backgroundColor: [
                            '#020288',
                            '#FF6F3B',

                            '#F273E6',

                          ]

                        },
                      ],
                    }}
                  />
                </ResponsiveContainer>
                <div>
                  <div className="flex justify-start items-center"><div className="w-[14px] mr-2 h-[8px] bg-[#288990] rounded-[5px]"></div> Hair  $ 50</div>
                  <div className="flex justify-start items-center"><div className="w-[14px] mr-2 h-[8px] bg-[#FFB84C] rounded-[5px]"></div> Consultation  $ 50</div>
                  <div className="flex justify-start items-center"><div className="w-[14px] mr-2 h-[8px] bg-[#F273E6] rounded-[5px]"></div> New Look  $ 50</div>                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div
            className=" space-y-4 w-[100%] p-4  rounded-[10px] bg-[#FFFFFF] my-4"
            style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
          >
            <h1 className="font-medium font-Lato text-2xl m-3 pt-3" style={{ fontSize: '20px', lineHeight: '24px' }}>New Orders</h1>
            <Table
              className="mt-5 hidden md:block"
              columns={columns}
              dataSource={data}
              onChange={onChange}
              id="newOrders"
              scroll={{ x: 900 }}
            />
            {/* Cards for Mobile */}
            {[1, 2, 3, 4].map(() => {
              return <div className="bg-[#FBEFEF] flex flex-col items-between justify-center md:hidden p-5 rounded-[10px] ">

                {/* 1st start*/}
                <div className="flex py-2 border-b-solid text-[#777777] border-b-[1px] border-b-[#ffffff] justify-between items-center">
                  <h6 className="text-[12px]">
                    Customer Name<br /><p className="text-[#000000] ">James</p>
                  </h6>
                  <h6>
                    Number<br /><p className="text-[#000000]">+1332033</p>
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
                    Service: <br /><p className="text-[#000000]">Hair Cut</p>
                  </h6>
                  <h6>
                    Email: <br /><p className="text-[#000000]">salon@gmail.com</p>
                  </h6>
                  <h6>
                    Price <br /><p className="text-[#000000]">$332</p>
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

        {/* Right Container */}
        <div className="w-[100%] xl:w-[25%] mt-4 lg:mt-10 xl:mt-0">
          <div
            className="mt-3 w-full rounded-[10px] bg-[#FFFFFF]"
            style={{ boxShadow: "0px 4px 21px 0px #0000000D" }}
          >
            <div className="w-full flex flex-col pt-3 justify-center items-center h-auto mt-3">
              <h1 className="text-[18px] text-[#000000] font-medium self-center">Calendar</h1>
              <Calendar defaultValue={new Date(2023, 8, 0)} className="react-calendar w-full" style={{ border: 'none' }} />
            </div>
          </div>
          <div className="w-full h-auto p-2 sm:p-4 mt-7 rounded-[10px] bg-[#FFFFFF]">
            <h2
              className="text-xl mb-4"
              style={{
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: "600",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Upcoming Appointments
            </h2>
            <div className="flex justify-between">
              <div className="flex">
                <Image
                  src={"/images/calender.png"}
                  alt="/"
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px]"
                />
                <div
                  className="ml-2 mt-2"
                  style={{
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  July 2023
                </div>
              </div>

            </div>

            <div className="flex flex-row flex-wrap xl:flex-col">
              {[1, 2, 3, 4, 5, 6, 7].map((index) => {
                return <div key={index}
                  className="flex  h-[84px] bg-[#F26A5A] bg-opacity-60 pt-[12px] pl-[5px] px-4 w-full"
                  style={{ borderRadius: "5px", marginTop: '16px' }}
                >
                  <Image
                    src={"/images/face.png"}
                    alt="/"
                    width={200}
                    height={200}
                    className="w-[64px] h-[58px] ml-2 mr-2"
                  />
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col  mr-[20px]">
                      <span className="text-[12px] whitespace-nowrap sm:text-[16px]"
                        style={{

                          fontWeight: "600",
                          fontFamily: "'Lato', sans-serif",
                        }}
                      >
                        Alberto Raya
                      </span>
                      <span className="text-[11px] sm:text-[13px]"
                        style={{

                          fontWeight: "600",
                          fontFamily: "'Lato', sans-serif",
                          color: "#000000",
                        }}
                      >
                        Hair Styling
                      </span>
                      <span className="text-[11px] sm:text-[13px]"
                        style={{
                          fontWeight: "600",
                          fontFamily: "'Lato', sans-serif",
                          color: "#000000",
                        }}
                      >
                        9:00-11:00
                      </span>
                    </div>
                    <div className="flex flex-col mt-2">
                      <Image
                        src={"/images/editicon.png"}
                        alt="/"
                        width={200}
                        height={200}
                        className="w-[15px] ml-3"
                      />
                      <span
                        className="mt-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        $78
                      </span>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Index;
