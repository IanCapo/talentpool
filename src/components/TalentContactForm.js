import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { css } from 'emotion'

const StyledForm = css`
  margin: 1rem;
`

export default class TalentContactForm extends React.Component {
  render() {
    return (
      <Form className={StyledForm}>
        <FormGroup>
          <Label for="company-name">Company Name</Label>
          <Input
            type="text"
            name="companyname"
            id="company-name"
            placeholder="Your company"
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact-name">Name</Label>
          <Input
            type="text"
            name="name"
            id="contact-name"
            placeholder="Your name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone-number">Phone</Label>
          <Input
            type="phone"
            name="phone"
            id="phone-number"
            placeholder="Your phone number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="example-email">Email</Label>
          <Input
            type="email"
            name="email"
            id="example email"
            placeholder="Your email address"
          />
        </FormGroup>

        <FormGroup>
          <Label for="message-text">Your message</Label>
          <Input type="textarea" name="text" id="message-text" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}
