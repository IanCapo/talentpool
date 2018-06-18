import React, { Component } from 'react'
import styled from 'react-emotion'

import { Link } from 'react-router-dom'

import SkillTile from './SkillTile'
import Button from './Button'
import UserContentProfile from './UserContentProfile'
import TalentHistory from './TalentHistory'
import TalentContactForm from './TalentContactForm'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  margin-bottom: 0.5rem;
  padding: 1rem;
`
const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export default class TalentProfile extends Component {
  renderSection = () => {
    const { selectedSection, user } = this.props
    if (selectedSection === 'Skills') {
      return user.skills.map((skill, index) => (
        <SkillTile key={index} text={skill} />
      ))
    } else if (selectedSection === 'History') {
      return user.history.map((job, index) => (
        <TalentHistory
          key={index}
          jobtitle={job.jobtitle}
          startdate={job.startdate}
          enddate={job.enddate}
        />
      ))
    } else if (selectedSection === 'Contact') {
      return <TalentContactForm />
    }
  }

  render() {
    const { photo, status, name, location, lastname } = this.props.user
    const { onSelectSection, selectedSection } = this.props

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
          <Button
            onClick={e => onSelectSection('History')}
            text="History"
            selectedSection={selectedSection}
          />
          <Button
            onClick={e => onSelectSection('Skills')}
            text="Skills"
            selectedSection={selectedSection}
          />
          <Button
            onClick={e => onSelectSection('Contact')}
            text="Contact"
            selectedSection={selectedSection}
          />
        </ButtonWrapper>

        {this.renderSection()}

        <div>
          <Link onClick={e => onSelectSection('History')} to="/">
            Talentlist
          </Link>
        </div>
      </Wrapper>
    )
  }
}
