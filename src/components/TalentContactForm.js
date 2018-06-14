import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class TalentContactForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="CompanyName">Company Name</Label>
          <Input
            type="text"
            name="companyname"
            id="companyName"
            placeholder="Your company"
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactName">Name</Label>
          <Input
            type="text"
            name="name"
            id="contactName"
            placeholder="Your name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone</Label>
          <Input
            type="phone"
            name="phone"
            id="phoneNumber"
            placeholder="Your phone number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">You message</Label>
          <Input type="textarea" name="text" id="messageText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}
