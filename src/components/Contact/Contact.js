import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvzoqky";

  // Handle Formspree response
  const handleFormspreeResponse = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          response.json().then((data) => {
            alert(data.errors ? data.errors.map(e => e.message).join(", ") : "Something went wrong.");
          });
        }
      })
      .catch(() => {
        alert("There was a problem submitting your form.");
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={7} lg={6}>
          <div className="contact-card p-4 shadow rounded bg-white">
            <h2 className="mb-4 text-center fw-bold" style={{ letterSpacing: 1 }}>Contact Me</h2>
            {submitted && <Alert variant="success">Message sent!</Alert>}
            <Form onSubmit={handleFormspreeResponse} autoComplete="off" noValidate>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="fw-semibold">Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    minLength={2}
                    maxLength={50}
                    className="form-control-custom"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    minLength={5}
                    maxLength={100}
                    className="form-control-custom"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaCommentDots /></InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    required
                    placeholder="Type your message here..."
                    minLength={10}
                    maxLength={1000}
                    className="form-control-custom"
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 fw-bold py-2 mt-2 shadow-sm">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <style>{`
        .contact-card {
          background: rgba(255,255,255,0.95);
        }
        .form-control-custom:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13,110,253,.15);
        }
        .form-control-custom {
          transition: box-shadow 0.2s, border-color 0.2s;
        }
      `}</style>
    </Container>
  );
}

export default Contact;
