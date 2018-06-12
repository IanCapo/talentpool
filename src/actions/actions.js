import { createAction } from 'redux-actions'

const Actions = {
  TOGGLE: 'TOGGLE',
  SELECT: 'SELECT',
  SELECT_SECTION: 'SELECT_SECTION',
}

export default Actions

export const toggle = createAction(Actions.TOGGLE)
export const onSelect = createAction(Actions.SELECT)
export const selectSection = createAction(Actions.SELECT_SECTION)
