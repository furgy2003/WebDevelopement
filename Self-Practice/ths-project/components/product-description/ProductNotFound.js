// react-next
import { styled } from "styled-components";

// components
import { Empty } from "antd";

const CustomDiv = styled.div`
  & {
    margin-top: 4rem;
  }
`;

export default function ProductNotFound() {
  return (
    <CustomDiv>
      <Empty />
    </CustomDiv>
  );
}
