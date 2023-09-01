import { styled } from "styled-components";

const CustomBox = styled.button`
  & {
    width: 10rem;
    height: 10rem;
  }
`;

export default function BoardBox(props) {
  const { player, clickHandler } = props;
  var value;
  if (player === -1) value = "X";
  else if (player === 1) value = "O";

  return <CustomBox onClick={clickHandler}>{value}</CustomBox>;
}
