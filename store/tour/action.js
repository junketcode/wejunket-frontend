import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import environment from "../../environment/environment"

export const tourActionTypes = {
  GET: 'GET',
}

export const  getTour = (tourId) => async (dispatch) => {
  const URL = `${environment.JUNKET_API_BASE}/tours/sharable/${tourId}`
  const options = {
    headers: { "X-Authorization": `${environment.JUNKET_API_KEY}` },
  }
  return await axios.get(URL, options)
    .then((response) => {
      console.log(response);
      return dispatch({ type: tourActionTypes.GET, data: response.data })
    })
    .catch((error) => {
      console.log(error);
      switch (error.response.status) {
        case 422:
        alert(error.response.data.meta.message);
          break;
        case 401:
        alert(error.response.data.meta.message);
          break;
        case 500:
        alert('Interval server error! Try again!');
          break;
        default:
        alert(error.response.data.meta.message);
          break;
      }
    });
}
