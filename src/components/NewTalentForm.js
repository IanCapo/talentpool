import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import './newtalentformstyle.css'
import { CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Link, Redirect } from 'react-router-dom'
import logo from '../images/logo.png'
import { saveFullState } from '../service'

const styledForm = css`
  margin: 1rem;
`
const Image = styled('img')`
  width: 20%;
`

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export default class NewTalentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      lastname: '',
      location: '',
      status: '',
      photo: '',
      file: null,
      tags: [],
      suggestions: [
        { id: 'HTML5', text: 'HTML5' },
        { id: 'CSS', text: 'CSS' },
        { id: 'JavaScript', text: 'JavaScript' },
        { id: 'React', text: 'React' },
        { id: 'Node', text: 'Node' },
        { id: 'Express', text: 'Express' },
      ],
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
  }
  onChange = event => {
    console.log(event.target.value)
    const input = event.target
    const file = input.files && input.files.length && event.target.files[0]
    this.setState({
      [input.name]: [input.value],
      file: file,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState(
      {
        ...this.state,
      },
      () => {
        const formData = new FormData()
        const dataObj = {
          name: this.state.name,
          lastname: this.state.lastname,
          location: this.state.location,
          status: this.state.status,
          photo: this.state.photo,
          skills: this.state.tags.map(tags => tags.text),
          file: this.state.file,
          key: this.state.name + this.state.lastname,
        }
        Object.keys(dataObj).forEach(key => {
          const value = dataObj[key]
          formData.append(key, value)
        })
        saveFullState(this.state)
        fetch('/person', {
          method: 'POST',
          body: formData,
        })
      },
    )
  }

  handleDelete(i) {
    const { tags } = this.state
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    })
  }

  handleAddition(tag) {
    this.setState(state => ({
      tags: [...state.tags, tag],
    }))
  }

  render() {
    const { tags, suggestions } = this.state
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
              onChange={this.onChange}
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
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Current work status</legend>
            <FormGroup check>
              <Label>
                <Input
                  type="radio"
                  name="status"
                  value="available"
                  onChange={this.onChange}
                />
                available
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="status"
                  value="not available"
                  onChange={this.onChange}
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
              onChange={this.onChange}
              placeholder="e.g. Hamburg or New York"
            />
          </FormGroup>
          <Label for="skills">What are your skills?</Label>
          <ReactTags
            tags={tags}
            placeholder="Add a new skill"
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            delimiters={delimiters}
          />
          <FormGroup>
            <Label for="photo">Upload a pic</Label>
            <CustomInput
              type="file"
              id="photo"
              name="photo"
              label="Yo, pick a pic!"
              value={this.state.photo}
              onChange={this.onChange}
              className="file-upload"
              data-cloudinary-field="image_id"
              data-form-data="{ 'transform': {'crop':'limit','tags':'samples', 'width':3000, 'height':2000}} "
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}
