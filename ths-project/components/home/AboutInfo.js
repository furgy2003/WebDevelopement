import { Row, Col } from "antd";
import Image from "next/image";

export default function AboutInfo() {
  return (
    <Row justify="center" align="middle" gutter={[64, 32]}>
      <Col xs={24} sm={24} md={12} lg={9}>
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Col>
      <Col xs={24} sm={24} md={12} lg={9}>
        <Image src="/img/company/company.jpg" width={500} height={350} />
      </Col>
    </Row>
  );
}
