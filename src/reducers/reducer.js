import Actions from '../actions/actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE:
      return { ...state, dropdownOpen: !state.dropdownOpen }
    case Actions.SELECT:
      return { ...state, selectedFilter: action.payload }
    default:
      return state
  }
}
