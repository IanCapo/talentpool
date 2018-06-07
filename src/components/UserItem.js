import React, { Component } from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
  font-family: sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
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
  font-size: 70%;
`
const HeadlineThree = styled('h3')`
  margin: 0;
  font-size: 100%;
`

export default class UserItem extends Component {
  render() {
    const ImageContainer = styled('div')`
      justify-self: center;
      height: auto;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      background-image: url(${this.props.photo});
      background-size: cover;
      background-position: center;
    `
    const Availability = styled('p')`
      margin: 1px;
      padding: 1px;
      font-size: 50%;
      color: ${this.props.status === 'available' ? 'green' : '#b50000'};
    `
    return (
      <Wrapper>
        <ImageContainer />
        <UserContent>
          <HeadlineThree>
            <span> {this.props.name}</span> |
            <Location> {this.props.location}</Location>
          </HeadlineThree>
          <Availability>{this.props.status}</Availability>
          <ParagraphSkills>{this.props.skills.join(' ')}</ParagraphSkills>
        </UserContent>
      </Wrapper>
    )
  }
}
