import { Fragment } from "react";
import Header from "@/components/ui/header/Header";
import AboutInfo from "@/components/home/AboutInfo";
import Wrapper from "@/components/ui/wrapper/Wrapper";

export default function AboutPage() {
  return (
    <Fragment>
      <Header>About Us</Header>
      <Wrapper>
        <AboutInfo />
      </Wrapper>
    </Fragment>
  );
}
