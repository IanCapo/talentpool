import React, { Component } from 'react'
import logo from '../images/logo.png'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const Image = styled('img')`
  height: 40%;
  width: 40%;
`

const HeaderBox = styled('div')`
  border-bottom: 1px solid #536370;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NewUser = styled('div')`
  background: white;
  color: #ed6544;
  border: 1px solid #ed6544;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  margin: 1rem;
  padding: .12rem .5rem;
  width: auto;
  overflow: auto;
  }
`

export default class Header extends Component {
  render() {
    return (
      <HeaderBox>
        <Image src={logo} alt="" />
        <Link to="/newuser">
          <NewUser>New User</NewUser>
        </Link>
      </HeaderBox>
    )
  }
}
