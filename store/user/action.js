export const userActionTypes = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN'
}

export const regUser = () => (dispatch) => {
  return dispatch({ type: userActionTypes.REGISTER })
}
