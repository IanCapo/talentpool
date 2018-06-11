import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
`
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
const Location = styled('span')`
  font-size: 70%;
`
const HeadlineThree = styled('h3')`
  margin: 0;
  font-size: 100%;
  display: block;
  margin-bottom: 0.8rem;
`
const Button = styled('button')`
  border: solid 1px #ed6544;
  background: #ed6544;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  margin: 1rem;
  width: 33%;
  color: white;
  overflow: auto;
`
const SkillTile = styled('div')`
  border: 1px solid #ed6544;
  border-radius: 3px;
  width: auto;
  padding: 0.2rem;
  text-align: center;
  margin: 1rem;
  color: #ed6544;
  overflow: auto;
`

export default class TalentProfile extends Component {
  render() {
    const { photo, status, name, location, skills, lastname } = this.props.user
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
      font-size: 50%;
      color: ${status === 'available' ? 'green' : '#b50000'};
    `
    return (
      <Wrapper>
        <UserContent>
          <ImageContainer />
          <HeadlineThree>
            {name} {lastname}
          </HeadlineThree>
          <Location>Location: {location}</Location>
          <Availability>
            <span
              className={css`
                color: #514b4b;
              `}
            >
              currently
            </span>{' '}
            {status}
          </Availability>
        </UserContent>
        <Button disabled>Skills</Button>
        {skills.map(skill => <SkillTile>{skill}</SkillTile>)}
        <div>
          <Link to="/">Talentlist </Link>
        </div>
      </Wrapper>
    )
  }
}
