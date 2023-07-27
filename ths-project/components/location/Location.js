import { Row, Col } from "antd";
import Image from "next/image";
import GoogleMap from "./GoogleMap";

export default function Location() {
  return (
    <Row justify="center" gutter={32} align="middle">
      <Col xs={24} sm={24} md={24} lg={6}>
        <h2>Address</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <Image src="/img/company/map.jpg" alt="map" width={500} height={400} />
      </Col>
    </Row>
  );
}
