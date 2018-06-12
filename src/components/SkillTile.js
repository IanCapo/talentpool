import React, { Component } from 'react'
import styled from 'react-emotion'

const Skill = styled('div')`
  border: 1px solid #ed6544;
  border-radius: 3px;
  width: auto;
  padding: 0.2rem;
  text-align: center;
  margin: 1rem;
  color: #ed6544;
  overflow: auto;
`
export default class SkillTile extends Component {
  render() {
    return <Skill>{this.props.text}</Skill>
  }
}
