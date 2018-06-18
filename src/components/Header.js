import React, { Component } from 'react'
import logo from '../images/logo.png'
import styled from 'react-emotion'

const Image = styled('img')`
  width: 40%;
`

const HeaderBox = styled('div')`
  border-bottom: 1px solid #536370;
  width: 100%;
`

export default class Header extends Component {
  render() {
    return (
      <HeaderBox>
        <Image src={logo} alt="" />
      </HeaderBox>
    )
  }
}
