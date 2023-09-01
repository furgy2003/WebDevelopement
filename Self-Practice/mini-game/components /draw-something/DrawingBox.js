import { styled } from "styled-components";

const StyledBox = styled.div`
  & {
    width: 30rem;
    height: 30rem;
    background-color: aliceblue;
    border: 1px solid;
  }
`;

export default function DrawingBox() {
  return <StyledBox></StyledBox>;
}
