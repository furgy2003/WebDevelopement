import { styled } from "styled-components";

const CustomDiv = styled.div`
  & {
    margin: 4rem;
    overflow-y: hidden;
  }
`;

export default function Wrapper(props) {
  return <CustomDiv>{props.children}</CustomDiv>;
}
