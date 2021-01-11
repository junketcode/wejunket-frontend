import { userActionTypes } from './action'

const userInitialState = {
  count: 0,
}

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.REGISTER:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    default:
      return state
  }
}
