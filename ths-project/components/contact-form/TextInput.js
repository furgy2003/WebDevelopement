import { Col } from "antd";
import classes from "./TextInput.module.css";
import { Fragment } from "react";

export default function TextInput(props) {
  const { id, label, value, required, isTextArea, onChange } = props;
  return (
    <Fragment>
      {isTextArea && (
        <Col className={classes.input} xs={24} sm={24} md={24} lg={12}>
          <label htmlFor={id}>{label}</label>
          <textarea
            id={id}
            rows="10"
            required={required}
            value={value}
            onChange={onChange}
          />
        </Col>
      )}
      {!isTextArea && (
        <Col className={classes.input} xs={24} sm={24} md={12} lg={6}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            required={required}
            value={value}
            onChange={onChange}
          />
        </Col>
      )}
    </Fragment>
  );
}
