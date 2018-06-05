import React from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import PropTypes from 'prop-types'

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
    return (
      <ButtonDropdown
        isOpen={this.props.dropdownOpen}
        onClick={e => this.props.onClick()}
        direction="down"
      >
        <DropdownToggle caret>Filter</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={e => this.props.onSelect(0)}>css</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={e => this.props.onSelect(1)}>
            html
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={e => this.props.onSelect(2)}>
            javascript
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
