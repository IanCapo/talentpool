import { createAction } from 'redux-actions'

const Actions = {
  TOGGLE: 'TOGGLE',
  SELECT: 'SELECT',
  SELECT_SECTION: 'SELECT_SECTION',
  OVERRIDE_STATE: 'OVERRIDE_STATE',
}

export default Actions

export const toggle = createAction(Actions.TOGGLE)
export const onSelect = createAction(Actions.SELECT)
export const selectSection = createAction(Actions.SELECT_SECTION)
export const overrideState = createAction(Actions.OVERRIDE_STATE)
