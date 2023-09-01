import { Fragment } from "react";
import IntroPassage from "./IntroPassage";
import DrawingBox from "./DrawingBox";

export default function DrawSomething() {
  return (
    <Fragment>
      <IntroPassage />
      <DrawingBox />
    </Fragment>
  );
}
