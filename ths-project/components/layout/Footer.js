import { Row, Col } from "antd";
import { styled } from "styled-components";

const CustomSection = styled.section`
  & {
    margin-top: 8rem;
  }

  .footer {
    background-color: var(--dd_green);
    color: white;
    height: 18rem;
    padding-top: 2.5rem;
  }

  .copyright {
    background-color: var(--d_green);
    color: white;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Footer() {
  return (
    <CustomSection>
      <Row className="footer" justify="center" gutter={32}>
        <Col xs={24} sm={24} md={6} lg={6}>
          <p>Address</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            efficitur nibh laoreet tortor ullamcorper dictum. Interdum et
            malesuada fames ac ante ipsum primis in
          </p>
          <p>Opening Hours</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            efficitur nibh
          </p>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <p>Contact</p>
          <p>Telephone: XXXXX</p>
          <p>FAX: XXXXX</p>
          <p>Line: XXXXX</p>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <p>About</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            efficitur nibh
          </p>
        </Col>
      </Row>
      <div className="copyright">
        <p>Copyright 2023. All rights reserved.</p>
      </div>
    </CustomSection>
  );
}
