import React, { Component } from 'react'
import styled from 'react-emotion'

import { Link } from 'react-router-dom'

import SkillTile from './SkillTile'
import ButtonComponent from './ButtonComponent'
import UserContentProfile from './UserContentProfile'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
`

export default class TalentProfile extends Component {
  render() {
    const {
      photo,
      status,
      name,
      location,
      skills,
      lastname,
      id,
    } = this.props.user

    return (
      <Wrapper>
        <UserContentProfile
          name={name}
          lastname={lastname}
          photo={photo}
          location={location}
          status={status}
        />
        <ButtonComponent disabled text="Skills" />
        {skills.map(skill => (
          <SkillTile key={id + Math.random()} text={skill} />
        ))}
        <div>
          <Link to="/">Talentlist </Link>
        </div>
      </Wrapper>
    )
  }
}
