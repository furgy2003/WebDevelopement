import { Row, Col } from "antd";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={classes.section}>
      <Row className={classes.footer} justify="center" gutter={32}>
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
      <div className={classes.copyright}>
        <p>Copyright 2023. All rights reserved.</p>
      </div>
    </section>
  );
}
