import { PieChartOutlined, HomeFilled, SettingFilled } from "@ant-design/icons";
import { MdCategory } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';

import Image from "next/image";
const routes = [
  {
    path: "/",
    icon: <Image src={"/images/dashboard.png"} width={12} height={12} />,
    title: "Dashboard",
    roles: ["admin", "user"],
  },
  {
    path: "/categories",
    icon: <MdCategory color="white" size={18} />,
    title: "Categories",
    roles: ["admin", "user"],
  },
  {
    path: "/orders",
    icon: <Image src={"/images/orders.png"} width={16} height={16} />,
    title: "Orders",
    roles: ["admin", "user"],
  },
  {
    path: "/service",
    icon: <AiFillStar size={18} color="white" />,
    title: "Services",
    roles: ["user", "admin"],
  },
  {
    path: "/users",
    icon: <Image src={"/images/users.png"} width={12} height={12} />,
    title: "Users",
    roles: ["admin", "user"],
  },
  {
    path: "/spa",
    icon: (
      <Image src={"/images/spa.png"} width={12} height={12} />
    ),
    title: "SPA",
    roles: ["user", "admin"],
  },
  {
    path: "/bookings",
    icon: <Image src={"/images/booking.png"} width={12} height={12} />,
    title: "Bookings",
    roles: ["user", "admin"],
  },
  {
    path: "/my-bookings",
    icon: <Image src={"/images/mybooking.png"} width={12} height={12} />,
    title: "My Bookings",
    roles: ["user", "admin"],
  },
  {
    path: "/availability",
    icon: <Image src={"/images/availability.png"} width={18} height={20} />,
    title: "Availability",
    roles: ["user", "admin"],
  },
  // {
  //   path: "/products",
  //   icon: <Image src={"/images/products.png"} width={12} height={12} />,
  //   title: "Products",
  //   roles: ["user", "admin"],
  // },
  {
    path: "/promocode",
    icon: <Image src={'/images/promocode.png'} width={12} height={12} />,
    title: "Promocode",
    roles: ["user", "admin"],
  },
  // {
  //   path: "/roles",
  //   icon: <Image src={'/images/role.png'} width={12} height={12} />,
  //   title: "Roles",
  //   roles: ["user", "admin"],
  // },
  {
    path: "/rating",
    icon: <AiFillStar size={18} color="white" />,
    title: "Ratings",
    roles: ["user", "admin"],
  },
  {
    path: "/finance",
    icon: <GiWallet size={18} color="white" />,
    title: "Finance",
    roles: ["user", "admin"],
  }
];

const routes1 = [
  {
    path: "/",
    icon: <Image src={"/images/dashboard.png"} width={12} height={12} />,
    title: "Dashboard",
    roles: ["admin", "user"],
  },
  {
    path: "/orders",
    icon: <Image src={"/images/orders.png"} width={16} height={16} />,
    title: "Orders",
    roles: ["admin", "user"],
  },
  {
    path: "/spa",
    icon: (
      <Image src={"/images/spa.png"} width={12} height={12} />
    ),
    title: "SPA",
    roles: ["user", "admin"],
  },
  {
    path: "/categories",
    icon: <MdCategory color="white" size={18} />,
    title: "Categories",
    roles: ["admin", "user"],
  },
  {
    path: "/users",
    icon: <Image src={"/images/users.png"} width={12} height={12} />,
    title: "Users",
    roles: ["admin", "user"],
  },

];


const routes3 = [

  {
    path: "/users",
    icon: <Image src={"/images/users.png"} width={12} height={12} />,
    title: "Users",
    roles: ["admin", "user"],
  },
  {
    path: "/service",
    icon: <AiFillStar size={18} color="white" />,
    title: "Services",
    roles: ["user", "admin"],
  },
  {
    path: "/bookings",
    icon: <Image src={"/images/booking.png"} width={12} height={12} />,
    title: "Bookings",
    roles: ["user", "admin"],
  },
  {
    path: "/my-bookings",
    icon: <Image src={"/images/mybooking.png"} width={12} height={12} />,
    title: "My Bookings",
    roles: ["user", "admin"],
  },
  {
    path: "/availability",
    icon: <Image src={"/images/availability.png"} width={18} height={20} />,
    title: "Availability",
    roles: ["user", "admin"],
  },
  // {
  //   path: "/products",
  //   icon: <Image src={"/images/products.png"} width={12} height={12} />,
  //   title: "Products",
  //   roles: ["user", "admin"],
  // },
  {
    path: "/promocode",
    icon: <Image src={'/images/promocode.png'} width={12} height={12} />,
    title: "Promocode",
    roles: ["user", "admin"],
  },
  // {
  //   path: "/roles",
  //   icon: <Image src={'/images/role.png'} width={12} height={12} />,
  //   title: "Roles",
  //   roles: ["user", "admin"],
  // },
  {
    path: "/rating",
    icon: <AiFillStar size={18} color="white" />,
    title: "Ratings",
    roles: ["user", "admin"],
  }
];

export { routes, routes1, routes3 };
