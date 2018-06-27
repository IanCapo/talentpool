import React, { Component } from 'react'
import styled from 'react-emotion'

import { Link } from 'react-router-dom'

import SkillTile from './SkillTile'
import Button from './Button'
import UserContentProfile from './UserContentProfile'
import TalentHistory from './TalentHistory'
import TalentContactFormView from '../containers/TalentContactFormView'
import logo from '../images/logo.png'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`
const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const Image = styled('img')`
  width: 20%;
`

const StyledLink = styled('div')`
  height: 5vw;
  width: 5vw;
  border-style: solid;
  border-color: white;
  border-width: 0px 2px 2px 0px;
  transform: rotate(135deg);
  position: absolute;
  top: 9px;
  left: 12px;
`
const StyledDiv = styled('div')`
  margin-top: 2rem;
  position: relative;
  width: 10vw;
  height: 10vw;
  border-radius: 50px;
  background: #5b6167;
  opacity: 0.8;
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
      return <TalentContactFormView />
    }
  }

  render() {
    const { photo, status, name, location, lastname } = this.props.user
    const { onSelectSection, selectedSection } = this.props
    return (
      <Wrapper>
        <Link onClick={e => onSelectSection('Skills')} to="/">
          <Image src={logo} alt="" />
        </Link>
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
          <Link onClick={e => onSelectSection('Skills')} to="/">
            <StyledDiv>
              <StyledLink />
            </StyledDiv>
          </Link>
        </div>
      </Wrapper>
    )
  }
}
