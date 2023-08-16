// react-next
import { useState } from "react";

// components
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import ContactButton from "../contact-button/ContactButton";
import LoginModal from "../login/LoginModal";

export default function Layout(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      <MainNavigation
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {props.children}
      <ContactButton />
      <Footer />
    </Fragment>
  );
}
