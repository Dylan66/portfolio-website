import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Basic email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Here you would send the form data to your email or backend
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={7} lg={6}>
          <div className="contact-card p-4 shadow rounded bg-white">
            <h2 className="mb-4 text-center fw-bold" style={{ letterSpacing: 1 }}>Contact Me</h2>
            {submitted && <Alert variant="success">Message sent!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} autoComplete="off" noValidate>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="fw-semibold">Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
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
                    value={form.message}
                    onChange={handleChange}
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
