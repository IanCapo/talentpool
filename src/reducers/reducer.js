import Actions from '../actions/actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE:
      return { ...state, isDropdownOpen: !state.isDropdownOpen }
    case Actions.SELECT:
      return { ...state, selectedFilter: action.payload }
    case Actions.SELECT_SECTION:
      return { ...state, selectedSection: action.payload }
    case Actions.OVERRIDE_STATE:
      return {
        ...state,
        users: [...action.payload],
      }
    case Actions.ADD_SKILL:
      return { ...state, skills: action.payload }
    case Actions.SEND_FORM:
      fetch('/person', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(action.payload),
      }).then(x => console.log('sent!', x))
      return state

    default:
      return state
  }
}
