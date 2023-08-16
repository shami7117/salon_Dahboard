import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Drawer, Radio, Space, Menu } from 'antd';
import { routes3 } from "@/routes/routes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdCategory } from 'react-icons/md';
// import { PiShoppingCartFill } from 'react-icons/pi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import Image from "next/image";
import { Ref } from "react";
const { Header, Content } = Layout;
const Index = ({ children }) => {
  const router = useRouter();
  const items = [
    {
      key: "2",
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="text-sm md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#F49342" }}
          >
            John Doe
          </span>
          <span
            className="text-black opacity-50 text-xs md:text-sm font-normal font-poppins"
            style={{ textTransform: "capitalize", opacity: "60" }}
          >
            Admin
          </span>
        </div>
      ),
    },
    {
      key: "1",
      label: (
        <span
          className="text-red-600 opacity-50 text-xs md:text-base font-normal font-poppins"
          style={{ color: "red" }}
          onClick={() => logoutMutation.mutate()}
        >
          Logout
        </span>
      ),
    },
  ];


  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("dash");

  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [current, setCurrent] = useState(router.pathname);
  useEffect(() => {
    if (router.pathname) {
      if (current !== router.pathname) {
        setCurrent(router.pathname);
      }
    }
  }, [router, current]);

  console.log("ACTIVE", active);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className={`${open ? "flex mb-[0xp]" : "hidden mb-[-10xp]"} absolute animate-slideInFromTop right-0 shadow-xl top-[10%] mt-[4rem] rounded-lg bg-[#F26A5A]`}
        style={{ padding: "0px", marginTop: "3.5rem", backgroundColor: '#F26A5A', borderRadius: "10px", boxShadow: "10px", boxSizing: "border-box", zIndex: "999", marginRight: "1.5rem" }}
      >
        <Menu
          style={{
            backgroundColor: '#F26A5A', borderRadius: "10px"
          }}
          className="sidebar shadow-xl"
          // theme="dark"
          defaultSelectedKeys={[current]}
          onClick={({ key }) => {
            setCurrent(key);
          }}
          mode="inline"
          items={routes3.map((route) => {
            if (route.roles.includes("admin")) {
              return {
                key: route.path,
                icon: route.icon,
                label:
                  route?.childrens?.length > 0 ? (
                    <button
                      href={route.path}
                      className="font-normal text-base font-lato text-white"
                    >
                      {route.title}
                    </button>
                  ) : (
                    <Link
                      href={route.path}
                      className="font-normal text-base font-lato text-white"
                      style={{ color: 'white' }}
                    >
                      {route.title}
                    </Link>
                  ),
                children: route?.childrens?.map((child) => {
                  if (child.roles.includes(role)) {
                    return {
                      key: child.path,
                      icon: child.icon,
                      label: (
                        <Link
                          href={child.path}
                          className="font-normal text-base font-lato text-white"
                        >
                          {child.title}
                        </Link>
                      ),
                    };
                  }
                }),
              };
            }
          })}
        />
      </div>
      <Sidebar role={"admin"} />
      <Layout >
        <div className=" navbarPosition px-4 py-2">

          <div className="flex items-center justify-center  space-x-4">
            <button
              type="button"
              className="flex md:hidden rounded-full order-first bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="./Images/P1.png"
                alt=""
              />
            </button>
            <div className="pr-3 hidden md:flex flex-col sm:flex-row justify-center items-center  sm:space-x-4">
              <BellOutlined className="text-2xl" />
              <SettingOutlined className="text-2xl" />
            </div>
            <div className="flex flex-col items-center justify-start mx-3">
              <span className="sr-only font-bold">Julina Smith</span>
              <span className="sr-only">Brand Modal</span>
            </div>

            <button
              type="button"
              className="hidden md:flex rounded-full order-first bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="./Images/P1.png"
                alt=""
              />
            </button>
          </div>
          <GiHamburgerMenu className=" md:hidden" onClick={showDrawer} size={30} />


        </div>

        <Content
          style={{
            background: "#F5F5FD",
          }}
        >
          <div
            className="bg-[#F5F5FD]"
            style={{
              padding: 24,
              minHeight: 360,
              height: "85vh",
              overflowY: "scroll",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>

      <div className="absolute z-50 h-[15vh]  py-2 px-4  bg-[#F26A5A] flex justify-between items-center  md:hidden bottom-0  w-full  left-0">


        <Link
          href={'/'}
          onClick={() => setActive("dash")}

          className={` ${active === "dash" && "Border"} font-normal  flex flex-col justify-center items-center text-base font-lato textColor`}
        >
          <Image src={"/images/dashboard.png"} width={25} height={25} />
          Dashboard
        </Link>

        <Link
          href={'/spa'}
          onClick={() => setActive("spa")}

          className={` ${active === "spa" && "Border"} font-normal  flex flex-col justify-center items-center text-base font-lato textColor`}       >
          <Image src={"/images/spa.png"} width={28} height={28} />

          SPA
        </Link>

        <Link
          href={'/orders'}
          onClick={() => setActive("order")}
          style={{ zIndex: "999" }}
          className={` ${active === "order" && "Border"}  font-normal bg-yellow  flex flex-col justify-center items-center text-[18px] font-lato textColor`}      >
          <AiOutlineShoppingCart fill="white" size={40} color="white" />
          Orders
        </Link>

        <Link
          href={'/finance'}
          onClick={() => setActive("finance")}

          className={` ${active === "finance" && "Border"} font-normal  flex flex-col justify-center items-center text-base font-lato textColor`}       >
          <GiWallet color="white" size={28} />
          Finance
        </Link>

        <Link
          href={'/categories'}
          onClick={() => setActive("cate")}

          className={` ${active === "cate" && "Border"} font-normal  flex flex-col justify-center items-center text-base font-lato textColor`}       >
          <MdCategory color="white" size={28} />
          Category
        </Link>

      </div >
    </Layout>
  );
};

export default Index;