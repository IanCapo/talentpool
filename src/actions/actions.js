import { createAction } from 'redux-actions'

const Actions = {
  TOGGLE: 'TOGGLE',
  SELECT: 'SELECT',
  SELECTTALENT: 'SELECTTALENT',
}

export default Actions

export const toggle = createAction(Actions.TOGGLE)
export const onSelect = createAction(Actions.SELECT)
export const onSelectTalent = createAction(Actions.SELECTTALENT)
