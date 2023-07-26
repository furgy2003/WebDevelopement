import { styled } from "styled-components";

const CustomButton = styled.button`
  & {
    border-radius: 10px;
    width: 15rem;
    height: 3rem;
    color: white;
    border-width: 0px;
    background-color: var(--d_green);
  }
`;

export default function ActionButton(props) {
  return <CustomButton>{props.children}</CustomButton>;
}
