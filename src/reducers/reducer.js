export default (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state }
    case 'TOGGLE':
      return { ...state, dropdownOpen: !state.dropdownOpen }
    default:
      return state
  }
}
