import React from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import PropTypes from 'prop-types'
import { css } from 'emotion'

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func,
}

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
}

export default class Example extends React.Component {
  render() {
    const { onItemClick, onClick, dropdownOpen, selectedFilter } = this.props
    return (
      <ButtonDropdown
        isOpen={dropdownOpen}
        onClick={e => onClick()}
        direction="down"
        className={css`
          align-self: flex-end;
          margin: 5px 5px;
        `}
      >
        <DropdownToggle caret size="sm">
          {selectedFilter}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={e => onItemClick('all')}>all</DropdownItem>
          <DropdownItem divider />
          {this.props.filter.map(filter => (
            <DropdownItem onClick={e => onItemClick(`${filter.option}`)}>
              {filter.option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
