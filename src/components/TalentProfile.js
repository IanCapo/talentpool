import React, { Component } from 'react'
import styled from 'react-emotion'

import { Link } from 'react-router-dom'

import SkillTile from './SkillTile'
import ButtonComponent from './ButtonComponent'
import UserContentProfile from './UserContentProfile'
import TalentHistory from './TalentHistory'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
`
const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: space-evenly;
`
export default class TalentProfile extends Component {
  renderSection = () => {
    const { selectedSection, user } = this.props
    if (selectedSection === 'Skills') {
      return user.skills.map(skill => (
        <SkillTile key={Math.random()} text={skill} />
      ))
    } else if (selectedSection === 'History') {
      return user.history.map(job => (
        <TalentHistory
          key={Math.random()}
          jobtitle={job.jobtitle}
          startdate={job.startdate}
          enddate={job.enddate}
        />
      ))
    }
  }

  render() {
    const { photo, status, name, location, lastname } = this.props.user

    return (
      <Wrapper>
        <UserContentProfile
          name={name}
          lastname={lastname}
          photo={photo}
          location={location}
          status={status}
        />
        <ButtonWrapper>
          <ButtonComponent
            onClick={e => this.props.onSelectSection('History')}
            text="History"
            selectedSection={this.props.selectedSection}
          />
          <ButtonComponent
            onClick={e => this.props.onSelectSection('Skills')}
            text="Skills"
          />
        </ButtonWrapper>

        {this.renderSection()}

        <div>
          <Link onClick={e => this.props.onSelectSection('History')} to="/">
            Talentlist{' '}
          </Link>
        </div>
      </Wrapper>
    )
  }
}
