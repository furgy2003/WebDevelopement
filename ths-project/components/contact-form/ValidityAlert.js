// react-next
import { styled } from "styled-components";

// components
import { Alert, Row, Col } from "antd";

const CustomRow = styled(Row)`
  & {
    margin-top: 1rem;
  }
`;

export default function ValidityAlert(props) {
  const { status } = props;
  return (
    <CustomRow justify="center" gutter={48}>
      <Col xs={24} sm={24} md={24} lg={24}>
        {status === "invalid" && (
          <Alert
            message="Invalid input"
            description="Please check your inputs, especially the email and telephone again."
            type="error"
            showIcon
          />
        )}
        {status === "error" && (
          <Alert
            message="Error"
            description="Something is wrong. Please try submitting the form again."
            type="error"
            showIcon
          />
        )}
        {status === "success" && (
          <Alert
            message="Success"
            description="Form is sent! We will contact you as fast as possible"
            type="success"
            showIcon
          />
        )}
      </Col>
    </CustomRow>
  );
}
