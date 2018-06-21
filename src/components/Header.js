import React, { Component } from 'react'
import logo from '../images/logo.png'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const Image = styled('img')`
  width: 40%;
`

const HeaderBox = styled('div')`
  border-bottom: 1px solid #536370;
  width: 100%;
`

export default class Header extends Component {
  render() {
    const { onSelectSection } = this.props
    return (
      <HeaderBox>
        <Image src={logo} alt="" />
        <Link onClick={e => onSelectSection('newuser')} to="/newuser">
          New User
        </Link>
      </HeaderBox>
    )
  }
}
