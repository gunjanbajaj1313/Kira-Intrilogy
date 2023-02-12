import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs( {logindata}) {
  const [message, setMessage] = useState("");
  const submit = () => {
    if (message == "") {
      {
        toast.error("Message Field is required", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.success("Message sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="body-contact">
      <Header />
      <div className="contact">
        <Form className="form-contact">
          <h3 className="head-contact text-center">Contact Us</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Full Name"
              value={logindata.length > 0 && logindata[0].name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={logindata.length > 0 && logindata[0].email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Form.Group>
          <Button variant="success" className="contact-button" onClick={submit}>
            Submit
          </Button>{" "}
          <ToastContainer />
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
