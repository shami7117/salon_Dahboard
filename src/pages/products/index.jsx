import { Button, Space, Table, Input, Tag, Popconfirm } from "antd";
import Head from "next/head";
import Image from "next/image";
import { AiFillFilter } from 'react-icons/ai';

const { Search } = Input;

const data = [
  {
    key: "1",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "2",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "3",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "4",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "3",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "4",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "3",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
  },
  {
    key: "4",
    name: "Hair Oil",
    price: "30$",
    quantity: 2,
    description: "Product description",
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
          <span className="text-base font-lato font-medium">Quantity</span>
        </div>
      ),
      dataIndex: "quantity",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-start">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.quantity}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Price</span>
        </div>
      ),
      dataIndex: "price",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.price}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-lato font-medium">Desc</span>
        </div>
      ),
      dataIndex: "desc",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full">
          <span className="text-base font-lato font-normal text-[#777777]">
            {record.description}
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
        <title>Products</title>
      </Head>
      <h2 className="text-2xl font-lato font-medium">Products</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <div className="flex space-y-4 md:space-y-0 sm:space-x-4 flex-col sm:flex-row items-start sm:items-end justify-between pb-5">
            <div className="flex w-full justify-between items-center">
              <Search
                placeholder="Search Products"
                allowClear
                size="large"
                onSearch={(value) => setSearchedText(value)}
                onChange={(e) => setSearchedText(e.target.value)}
                className="searchBar w-52 lg:w-[18rem]"
              ></Search>

              <Button
                className="btn-primary inline md:hidden ml-4  bg-[#F26A5A]  font-lato hover:bg-transparent"
                type="primary"
                size="large"
              // icon={}
              // onClick={() => setShowCategoryModal(true)}
              >
                {/* Filter */}
                <AiFillFilter />

              </Button>
            </div>

            <div className="w-[100%] flex sm:justify-end">
              <Button
                className="btn-primary hidden md:inline  bg-[#F26A5A] mr-4 font-lato hover:bg-transparent"
                type="primary"
                size="large"
                icon={<AiFillFilter />}
              // onClick={() => setShowCategoryModal(true)}
              >
                Filter

              </Button>
              <Button
                className="btn-primary  w-[100%] sm:w-[160px] bg-[#F26A5A] font-lato self-end hover:bg-[#F26A5A]"
                type="primary"

                size="large"
              // onClick={() => setShowCategoryModal(true)}
              >
                +   Add Products
              </Button>
            </div>


          </div>
        </div>
        <Table
          // loading={isLoading}
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1000 }}
        />
      </div>
    </div>
  );
};

export default Index;