import { createAction } from 'redux-actions'

const Actions = {
  TOGGLE: Symbol(),
  SELECT: Symbol(),
}

export default Actions

export const toggle = createAction(Actions.TOGGLE)
export const onSelect = createAction(Actions.SELECT)
