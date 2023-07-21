import { useState } from "react";
import { Row } from "antd";
import TextInput from "./TextInput";
import ActionButton from "../ui/button/ActionButton";
import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [company, setCompany] = useState("");
  const [question, setQuestion] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setTel("");
    setCompany("");
    setQuestion("");
  }

  function submitHandler(event) {
    event.preventDefault();
    resetForm();
  }

  return (
    <section>
      <h1>Contact Form</h1>
      <form onSubmit={submitHandler}>
        <Row justify="center" gutter={32}>
          <TextInput
            id="name"
            label="Name"
            value={name}
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextInput
            id="tel"
            label="Telephone No."
            value={tel}
            required={true}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </Row>
        <Row justify="center" gutter={32}>
          <TextInput
            id="email"
            label="Email"
            value={email}
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextInput
            id="company"
            label="Company/ organization name"
            value={company}
            required={false}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </Row>
        <Row justify="center" gutter={32}>
          <TextInput
            id="question"
            label="Describe your problem"
            value={question}
            isTextArea={true}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </Row>
        <Row justify="center" className={classes.btn}>
          <ActionButton onSubmit={submitHandler}>
            <h3>Submit</h3>
          </ActionButton>
        </Row>
      </form>
    </section>
  );
}
