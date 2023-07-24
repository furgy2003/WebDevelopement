import { Row, Col } from "antd";
import Map from "./Map";

export default function Location() {
  return (
    <Row>
      <Col>Address</Col>
      <Col>
        <Map />
      </Col>
    </Row>
  );
}
