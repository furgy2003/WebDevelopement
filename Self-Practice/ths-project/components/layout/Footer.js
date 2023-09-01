// react-next
import { styled } from "styled-components";

// components
import { Row, Col } from "antd";
import Wrapper from "../ui/wrapper/Wrapper";

const CustomSection = styled.section`
  & {
    margin-top: 8rem;
    background-color: var(--dd_green);
    color: white;
  }

  .footer {
    padding-top: 2.5;
    padding-bottom: 2.5rem;
    overflow-y: visible !important;
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
      <Wrapper>
        <Row className="footer" justify="center" gutter={32}>
          <Col xs={24} sm={24} md={6} lg={6}>
            <p>Address</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum efficitur nibh laoreet tortor ullamcorper dictum.
              Interdum et malesuada fames ac ante ipsum primis in
            </p>
            <p>Opening Hours</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum efficitur nibh
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum efficitur nibh
            </p>
          </Col>
        </Row>
      </Wrapper>
      <div className="copyright">
        <p>Copyright 2023. All rights reserved.</p>
      </div>
    </CustomSection>
  );
}
