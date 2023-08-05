// react-next
import { styled } from "styled-components";

// components
import { Tabs } from "antd";
import { Row, Col } from "antd";

const CustomTabs = styled(Tabs)`
  & {
    margin-bottom: 6rem;
  }
`;

export default function ProductTab() {
  return (
    <Row justify="center">
      <Col className="column" xs={24} sm={24} md={24} lg={18}>
        <CustomTabs
          defaultActiveKey="1"
          centered
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab Pane ${id}`,
            };
          })}
        />
      </Col>
    </Row>
  );
}
