// react-next
import { styled } from "styled-components";

// components
import DefaultButton from "../ui/button/DefaultButton";

export default function LoginButton(props) {
  const { isModalOpen, setIsModalOpen } = props;
  function loginHandler() {
    setIsModalOpen(true);
  }

  return (
    <DefaultButton onClick={loginHandler} className="login_btn">
      Login
    </DefaultButton>
  );
}
