import { Row, Col } from "antd";
import GoogleMap from "./GoogleMap";

export default function Location() {
  return (
    <Row>
      <Col>Address</Col>
      <Col>
        <GoogleMap />
      </Col>
    </Row>
  );
}
