import React from 'react';
import { Button, Form } from "react-bootstrap";

export default function Text() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Prompt</Form.Label>
        <Form.Control placeholder='Enter Yours Prompt' as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  );
}
