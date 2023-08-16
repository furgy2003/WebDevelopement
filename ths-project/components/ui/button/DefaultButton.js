// react-next
import { styled } from "styled-components";

// components
import { Button } from "antd";

const CustomButton = styled(Button)`
  & {
    overflow: hidden;
  }
`;

export default function DefaultButton(props) {
  const { onClick } = props;
  return <CustomButton onClick={onClick}>{props.children}</CustomButton>;
}
