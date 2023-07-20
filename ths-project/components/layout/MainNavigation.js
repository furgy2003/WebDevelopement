import Logo from "./Logo";
import { Menu } from "antd";
import { useState } from "react";
import Link from "next/link";

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
    },
    {
      label: <Link href="/product">Our Products</Link>,
      key: "our-products",
    },
    {
      label: <Link href="/contact">Contact</Link>,
      key: "contact",
    },
  ];

  const [current, setCurrent] = useState("home");
  const onClick = (event) => {
    setCurrent(event.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
