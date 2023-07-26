import Logo from "./Logo";
import { Menu } from "antd";
import { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";

const CustomMenu = styled(Menu)`
  & {
    overflow-y: hidden;
    display: flex;
    align-items: center;
  }

  .ant-menu-item-active::after {
    border-color: var(--action_green) !important;
  }

  .ant-menu-item-selected {
    color: var(--action_green) !important;
  }

  .ant-menu-item-selected::after {
    border-bottom-width: 0px !important;
    border-bottom-color: white !important;
  }
`;

export default function MainNavigation() {
  const items = [
    {
      label: <Logo />,
      key: "logo",
    },
    {
      label: <Link href="/">Home</Link>,
      key: "home",
    },
    {
      label: <Link href="/about-us">About Us</Link>,
      key: "about-us",
      path: "/about-us",
    },
    {
      label: <Link href="/product">Our Products</Link>,
      key: "product",
    },
    {
      label: <Link href="/contact">Contact</Link>,
      key: "contact",
    },
  ];

  const [current, setCurrent] = useState("");

  const onClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <CustomMenu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
