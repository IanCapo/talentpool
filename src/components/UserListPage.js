import React, { Component } from 'react'
import styled from 'react-emotion'

import UserListView from '../containers/UserListView'
import UserFilterView from '../containers/UserFilterView'
import Header from './Header'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

class UserListPage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <UserFilterView />
        <UserListView />
      </Wrapper>
    )
  }
}

export default UserListPage
