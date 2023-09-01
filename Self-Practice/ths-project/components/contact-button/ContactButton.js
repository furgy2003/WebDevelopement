// react-next
import { styled } from "styled-components";

// components
import Image from "next/image";

const CustomAnchor = styled.a`
  & {
    position: fixed;
    bottom: 4rem;
    right: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
  }

  &:hover {
    box-shadow: 0 0 5px var(--grey_font);
  }
`;

export default function ContactButton() {
  return (
    <CustomAnchor href="http://www.tekhengsteel.com/" target="_blank">
      <Image src="/icon/line-icon.png" alt="Line" width={40} height={40} />
    </CustomAnchor>
  );
}
