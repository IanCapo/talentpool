import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const styledForm = css`
  margin: 1rem;
`
const Image = styled('img')`
  width: 20%;
`

export default class TalentContactForm extends React.Component {
  state = {
    name: '',
    lastname: '',
    phone: '',
    status: '',
    skills: [],
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      lastname: '',
      phone: '',
      status: '',
      skills: [],
    })
  }

  saveInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { onSelectSection } = this.props
    return (
      <div>
        <Link onClick={e => onSelectSection('History')} to="/">
          <Image src={logo} alt="" />
        </Link>
        <Form className={styledForm} onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="talent-name">Firstname</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              id="talent-name"
              placeholder="Your name"
              onChange={this.saveInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="last-name">Lastname</Label>
            <Input
              type="text"
              name="lastname"
              value={this.state.lastname}
              id="last-name"
              placeholder="Your lastname"
              onChange={this.saveInput}
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Current work status</legend>
            <FormGroup check>
              <Label>
                <Input
                  type="radio"
                  name="status"
                  value={this.state.status === 'available'}
                  onChange={this.saveInput}
                />
                available
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="status"
                  value={this.state.status === 'not available'}
                  onChange={this.saveInput}
                />
                not available
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <Label for="location">Where do you wanna work</Label>
            <Input
              type="text"
              name="location"
              value={this.state.location}
              id="location"
              onChange={this.saveInput}
              placeholder="e.g. Hamburg or New York"
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
