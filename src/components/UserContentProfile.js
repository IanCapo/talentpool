import React, { Component } from 'react'
import styled from 'react-emotion'

const UserContent = styled('div')`
  justify-self: flex-end;
  width: 98%;
  color: #514b4b;
  margin-left: 1rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;
  border-bottom: 0.1rem #514b4b solid;
  margin-bottom: 1rem;
  white-space: nowrap;
`
const Location = styled('span')``
const HeadlineThree = styled('h3')`
  margin: 0;
  display: block;
  margin-bottom: 0.8rem;
`
const Currently = styled('span')`
  color: #514b4b;
`

export default class UserContentProfile extends Component {
  render() {
    const { photo, status, location, name, lastname } = this.props
    const ImageContainer = styled('div')`
      justify-self: center;
      border-radius: 50%;
      width: 10rem;
      height: 10rem;
      background-image: url(${photo});
      background-size: cover;
      background-position: center;
      margin-bottom: 1rem;
    `
    const Availability = styled('p')`
      margin: 1px;
      padding: 1px;
      color: ${status === 'available' ? 'green' : '#b50000'};
    `
    return (
      <UserContent>
        <ImageContainer />
        <HeadlineThree>
          {name} {lastname}
        </HeadlineThree>
        <Location>Location: {location}</Location>
        <Availability>
          <Currently>currently </Currently>
          {status}
        </Availability>
      </UserContent>
    )
  }
}
