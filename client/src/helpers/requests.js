import axios from "axios";
import Cookies from "js-cookie";


const handleError = ( status ) => {
  let errorMessage = null;
  switch(status) {
    case 400:
      errorMessage = 'Поступившие данные некорректны';
      break;
    case 401:
      errorMessage = 'Неверный email адрес или пароль';
      break;
    case 403:
      errorMessage = 'Доступа к запрашиваемому ресурсу запрещен';
      break;
    case 404:
      errorMessage = 'Неверный запрос';
      break;
    case 500:
      errorMessage = 'Произошла ошибка на стороне сервера';
      break;
  }
  return errorMessage;
};

async function httpRequest(url, method = 'GET', data = null, headers = {}) {

  const token = Cookies.get("token");
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const response = await axios.request({url, method, data, headers});
    return { success: true, payload: response.data }
  } catch (e) {
    let error = handleError(e.response.status);
    return { success: false, error }
  }
}

export default httpRequest;