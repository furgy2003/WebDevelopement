import { styled } from "styled-components";

const CustomDiv = styled.div`
  & {
    background-color: var(--dd_green);
    color: white;
    height: 35rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Opening() {
  return (
    <CustomDiv>
      <h1>Hello</h1>
    </CustomDiv>
  );
}
