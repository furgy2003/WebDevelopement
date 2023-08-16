// react-next
import { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";

// components
import Logo from "./Logo";
import { Menu } from "antd";
import LoginButton from "../login/LoginButton";

const CustomMenu = styled(Menu)`
  & {
    overflow-y: hidden;
    display: flex;
    align-items: center;
  }

  .ant-menu-item-selected::after {
    border-bottom-width: 0px !important;
    border-bottom-color: white !important;
  }

  .login_btn {
    margin-left: auto !important;
  }
`;

export default function MainNavigation(props) {
  const { isModalOpen, setIsModalOpen } = props;
  const [current, setCurrent] = useState("");
  const onClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <CustomMenu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="logo">
        <Logo />
      </Menu.Item>
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about-us">
        <Link href="/about-us">About Us</Link>
      </Menu.Item>
      <Menu.Item key="product">
        <Link href="/product">Our Products</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item
        key="login"
        // style={{ marginLeft: "auto" }}
        className="login_btn"
      >
        <LoginButton
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Menu.Item>
    </CustomMenu>
  );
}

// export default function MainNavigation(props) {
//   const { isModalOpen, setIsModalOpen } = props;
//   const items = [
//     {
//       label: <Logo />,
//       key: "logo",
//     },
//     {
//       label: <Link href="/">Home</Link>,
//       key: "home",
//     },
//     {
//       label: <Link href="/about-us">About Us</Link>,
//       key: "about-us",
//     },
//     {
//       label: <Link href="/product">Our Products</Link>,
//       key: "product",
//     },
//     {
//       label: <Link href="/contact">Contact</Link>,
//       key: "contact",
//     },
//     {
//       label: (
//         <LoginButton
//           isModalOpen={isModalOpen}
//           setIsModalOpen={setIsModalOpen}
//         />
//       ),
//       key: "login",
//     },
//   ];

//   const [current, setCurrent] = useState("");
//   const onClick = (event) => {
//     setCurrent(event.key);
//   };

//   return (
//     <CustomMenu
//       onClick={onClick}
//       selectedKeys={[current]}
//       mode="horizontal"
//       items={items}
//     />
//   );
// }
