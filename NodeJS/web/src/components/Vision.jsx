import React from "react";
import { Form } from "react-bootstrap";

export default function Vision() {
  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" size="md" />
      </Form.Group>
    </Form.Group>
  );
}
