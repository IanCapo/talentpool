import React, { Component } from 'react'
import styled from 'react-emotion'

const JobSection = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 3vh;
`
const StyledH4 = styled('h4')`
  font-weight: lighter;
`

export default class TalentHistory extends Component {
  render() {
    const { jobtitle, startdate, enddate } = this.props
    return (
      <JobSection>
        <StyledH4>{jobtitle}</StyledH4>
        <p>
          {startdate} - {enddate}
        </p>
      </JobSection>
    )
  }
}
