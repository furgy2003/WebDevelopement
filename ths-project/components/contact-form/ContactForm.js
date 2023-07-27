// react-next
import { useState } from "react";
import { styled } from "styled-components";

// components
import { Row } from "antd";
import TextInput from "./TextInput";
import ActionButton from "../ui/button/ActionButton";
import ValidityAlert from "./ValidityAlert";

const Form = styled.form`
  .btn {
    margin-top: 20px;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [company, setCompany] = useState("");
  const [question, setQuestion] = useState("");
  const [alert, setAlert] = useState(null);

  function resetForm() {
    setName("");
    setEmail("");
    setTel("");
    setCompany("");
    setQuestion("");
  }

  async function submitHandler(event) {
    event.preventDefault();
    setAlert(null);
    const customer = {
      name,
      email,
      tel,
      company,
      question,
    };

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !tel ||
      !/^\d+$/.test(tel)
    ) {
      setAlert("invalid");
      return;
    }

    const response = await fetch("/api/contact-form", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      setAlert("error");
      return;
    }

    setAlert("success");
    resetForm();
  }

  return (
    <section>
      <h1>Contact Form</h1>
      <Form onSubmit={submitHandler}>
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
        {alert && <ValidityAlert status={alert} />}
        <Row justify="center" className="btn">
          <ActionButton onSubmit={submitHandler}>
            <h3>Submit</h3>
          </ActionButton>
        </Row>
      </Form>
    </section>
  );
}
