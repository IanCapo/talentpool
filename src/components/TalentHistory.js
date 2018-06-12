import React, { Component } from 'react'
import styled from 'react-emotion'

const JobSection = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 50%;
  margin: 1rem;
  margin-top: 3vh;
`
const StyledH4 = styled('h4')`
  font-weight: lighter;
`

export default class TalentHistory extends Component {
  render() {
    return (
      <JobSection>
        <StyledH4>{this.props.jobtitle}</StyledH4>
        <p>
          {this.props.startdate} - {this.props.enddate}
        </p>
      </JobSection>
    )
  }
}
