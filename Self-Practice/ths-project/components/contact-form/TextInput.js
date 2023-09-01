// react-next
import { styled } from "styled-components";

// components
import { Col } from "antd";
import { Fragment } from "react";

const CustomCol = styled(Col)`
  display: grid;
  margin-top: 20px;

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    outline: none !important;
    border-radius: 2px;
    border-width: 0.5px;
    border-style: solid;
    border-color: rgb(181, 181, 181);
  }

  input:focus,
  textarea:focus {
    outline: none !important;
    border-color: var(--action_green);
  }

  input {
    height: 2.5rem;
  }

  textarea {
    resize: none;
  }
`;

export default function TextInput(props) {
  const { id, label, value, required, isTextArea, onChange } = props;
  return (
    <Fragment>
      {isTextArea && (
        <CustomCol className="input" xs={24} sm={24} md={24} lg={24}>
          <label htmlFor={id}>{label}</label>
          <textarea
            id={id}
            rows="10"
            required={required}
            value={value}
            onChange={onChange}
          />
        </CustomCol>
      )}
      {!isTextArea && (
        <CustomCol className="input" xs={24} sm={24} md={12} lg={12}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            required={required}
            value={value}
            onChange={onChange}
          />
        </CustomCol>
      )}
    </Fragment>
  );
}
