import React from 'react'
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'

const FormWrapper = ({ title, body, tooltip }) => (
  <Form className="d-flex align-items-center">
    <Form.Group controlId="datepicker-wrapper" className="mr-3 w-100">
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group controlId="select-vendor" className="w-100">
      <Form.Control as="select">
        <option>TELKOM</option>
        <option>TELKOM</option>
        <option>TELKOM</option>
      </Form.Control>
    </Form.Group>
  </Form>
)

FormWrapper.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.string,
  body: PropTypes.any,
};

export default FormWrapper