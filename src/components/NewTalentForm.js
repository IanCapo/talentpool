import React from 'react'
import { CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { saveFullstate } from '../service'

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
    location: '',
    status: '',
    skills: [],
    photo: '',
  }

  onChange = e => {
    console.log('')
    const input = event.target
    this.setState({ [input.name]: [input.value] })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState(
      {
        ...this.state,
      },
      () => {
        saveFullstate(this.state)
        fetch('/person', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            lastname: this.state.lastname,
            location: this.state.location,
            status: this.state.status,
            photo: this.state.photo,
            skills: this.state.skills,
          }),
        })
      },
    )
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
              onChange={this.saveFullState}
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
              onChange={this.saveFullState}
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
                  onChange={this.saveFullState}
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
                  onChange={this.saveFullState}
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
          <FormGroup>
            <Label for="photo">Upload a pic</Label>
            <CustomInput
              type="file"
              id="photo"
              name="photo"
              label="Yo, pick a pic!"
              value={this.state.photo}
              onChange={this.saveInput}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
