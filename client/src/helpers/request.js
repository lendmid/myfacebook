import axios from "axios";
import Cookies from "js-cookie";


const handleError = ( status ) => {
  let errorMessage;
  switch(status) {
    case 400:
      errorMessage = 'Received data is incorrect';
      break;
    case 401:
      errorMessage = 'Authorization is required to access the service';
      break;
    case 403:
      errorMessage = 'Access to the requested resource is forbidden';
      break;
    case 404:
      errorMessage = 'Bad request';
      break;
    case 500:
      errorMessage = 'A server side error';
      break;
    default:
      errorMessage = '';
  }
  return errorMessage;
};

async function request(url, method = 'GET', data = null, headers = {}) {

  const token = Cookies.get("token");
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const response = await axios.request({url, method, data, headers});
    if (response.data.token) Cookies.set("token", response.data.token);

    return {success: true, payload: response.data}
  } catch (e) {
    let error = handleError(e.response.status);
    return {success: false, error: `${error}. ${e.response.data.message}`}
  }
}

export default request;