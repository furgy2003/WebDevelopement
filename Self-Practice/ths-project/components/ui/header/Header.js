import { styled } from "styled-components";

const CustomDiv = styled.div`
  & {
    background-color: var(--ddd_green);
    color: white;
    height: 10rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h1 {
    margin: auto;
  }
`;

export default function Header(props) {
  return (
    <CustomDiv>
      <h1>{props.children}</h1>
    </CustomDiv>
  );
}
