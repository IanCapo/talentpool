import React, { Component } from 'react'
import styled from 'react-emotion'

const Skill = styled('div')`
  border: 1px solid #5b6167;
  border-radius: 3px;
  width: auto;
  padding: 0.2rem;
  text-align: center;
  margin: 1rem;
  color: #5b6167;
  overflow: auto;
  font-style: italic;
`
export default class SkillTile extends Component {
  render() {
    return <Skill>{this.props.text}</Skill>
  }
}
