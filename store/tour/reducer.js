import { tourActionTypes } from './action'

const tourInitialState = {
  tour: null,
  stops: [],
  route: [],
  latest_reviews: []
}

export default function reducer(state = tourInitialState, action) {
  switch (action.type) {
    case tourActionTypes.GET:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
