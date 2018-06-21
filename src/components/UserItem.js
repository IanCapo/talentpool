import React, { Component } from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
  font-family: sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  overflow: auto;
`
const UserContent = styled('div')`
  justify-self: flex-end;
  color: #514b4b;
  margin-left: 1rem;
  align-self: center;
`
const Location = styled('span')`
  font-size: 70%;
`
const ParagraphSkills = styled('p')`
  margin: 1px;
  padding: 1px;
  font-size: 60%;
  white-space: nowrap;
`
const HeadlineThree = styled('h3')`
  margin: 0;
  font-size: 100%;
  white-space: nowrap;
`

export default class UserItem extends Component {
  render() {
    const { photo, status, name, location, skills } = this.props
    const ImageContainer = styled('div')`
      justify-self: center;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      background-image: url(${photo});
      background-size: cover;
      background-position: center;
    `
    const Availability = styled('p')`
      margin: 1px;
      padding: 1px;
      font-size: 50%;
      color: ${status === 'available' ? 'green' : '#b50000'};
    `

    return (
      <Wrapper>
        <ImageContainer />
        <UserContent>
          <HeadlineThree>
            <span> {name}</span> |
            <Location> {location}</Location>
          </HeadlineThree>
          <Availability>{status}</Availability>
          <ParagraphSkills>Skills</ParagraphSkills>
        </UserContent>
      </Wrapper>
    )
  }
}
