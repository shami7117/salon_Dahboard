import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { routes, routes1 } from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdCategory } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
const { Sider, } = Layout;

const Sidebar = ({ role }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  useEffect(() => {
    if (router.pathname) {
      if (current !== router.pathname) {
        setCurrent(router.pathname);
      }
    }
  }, [router, current]);

  return (
    <>
      <Sider className="hidden w-full md:block" style={{ paddingTop: "1rem", backgroundColor: '#F26A5A' }}>

        <div className='flex w-[150px] justify-center items-start'>
          <Link href={"/"}>
            <Image
              src={"/images/kutsbeegray.png"}
              alt="logo"
              width={100}
              height={100}
              style={{color: 'white'}}
            // className="w-[150px] md:w-[150px]"
            />
          </Link>
        </div>
        <Menu
          style={{
            marginTop: "2rem",
            backgroundColor: '#F26A5A', width: "100%"
          }}
          className="sidebar w-full"
          // theme="dark"
          defaultSelectedKeys={[current]}
          onClick={({ key }) => {
            setCurrent(key);
          }}
          mode="inline"
          items={routes.map((route) => {
            if (route.roles.includes(role)) {
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
      </Sider>



    </>

  );
};

export default Sidebar;
