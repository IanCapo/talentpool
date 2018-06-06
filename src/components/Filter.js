import React from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { css } from 'emotion'

export default class Example extends React.Component {
  render() {
    const { onItemClick, onClick, isDropdownOpen, selectedFilter } = this.props
    return (
      <ButtonDropdown
        isOpen={isDropdownOpen}
        onClick={e => onClick()}
        direction="down"
        toggle={noop}
        className={css`
          align-self: flex-end;
          margin: 5px;
        `}
      >
        <DropdownToggle caret size="sm">
          {selectedFilter}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem toggle={false} onClick={e => onItemClick('all')}>
            all
          </DropdownItem>
          <DropdownItem toggle={false} divider />
          {this.props.filter.map(filter => (
            <DropdownItem
              toggle={false}
              onClick={e => onItemClick(`${filter.option}`)}
            >
              {filter.option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

function noop() {
  // this function does nothing,
  // button ButtonDropdown expects a func
  // in toggle={}
}
