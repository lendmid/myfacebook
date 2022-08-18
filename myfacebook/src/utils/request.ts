import axios, {AxiosError, AxiosRequestConfig, AxiosResponse, Method} from "axios";
import {stringify} from "qs";
import {checkAccessTokenExpired} from "./token";


export interface IResponse {
    success: boolean;
    // todo: find approach how to sharing types definitions
    payload?: any;
    code: number;
    error?: string;
}

const baseUrl = process.env.REACT_APP_BASE_URL;

const getClientGlobalError = (status: number) => {
    let errorMessage = '';
    switch (status) {
        case 400:
            errorMessage = 'Sent data is incorrect';
            break;
        case 401:
            errorMessage = 'Authorization is required to access the service';
            break;
        case 403:
            errorMessage = 'You don\'t have access to the requested resource';
            break;
        case 404:
            errorMessage = 'Resource doesn\'t exist';
            break;
        case 500:
            errorMessage = 'Server error';
            break;
    }
    return errorMessage;
};

// todo: typing data and params in whole app
export const createRequestConfig = (url: string, method: string, params: any, data: any, blob?: boolean) => {
    const config: AxiosRequestConfig = {
        url,
        params,
        method,
        data,
        headers: {},
        paramsSerializer: (params: any) => stringify(params, {arrayFormat: 'repeat'})
    };
    const token = localStorage.getItem('accessToken');
    if (token) config.headers!["Authorization"] = `Bearer ${token}`;
    if (blob) config.responseType = 'blob';
    if (baseUrl) config.baseURL = baseUrl;
    return config;
};

const logoutNow = () => {
    localStorage.clear();
    window.location.reload();
}

export const request = async (
    url: string, method: Method = 'GET', params = {}, data: any = null, blob = false, tryingLogin = false
): Promise<IResponse> => {
    const tokenExpired = await checkAccessTokenExpired();
    try {
        const config: AxiosRequestConfig = createRequestConfig(url, method, params, data, blob);
        if (tokenExpired && !tryingLogin) logoutNow();

        const response: AxiosResponse = await axios.request(config);

        return {success: true, payload: response.data, code: response.status};
    } catch (e: ReturnType<typeof AxiosError>) {
        console.error(e)
        if (!e.response) return {success: false, error: '', code: e.response?.status};

        let error = e.response.status ? getClientGlobalError(e.response.status) : "";
        if (typeof e.response.data === "string") error += ` \n ${e.response.data}`;

        return {success: false, error, code: e.response.status}
    }
}

// async function request(url: string, method = 'GET', data: any = null, headers = {}) {
//
//     const token = Cookies.get("token");
//     if (token) headers["Authorization"] = `Bearer ${token}`;
//
//     try {
//         const response = await axios.request({url, method, data, headers});
//         if (response.data.token) Cookies.set("token", response.data.token);
//
//         return {success: true, payload: response.data}
//     } catch (e) {
//         console.log(e);
//         let error = handleError(e.response.status);
//
//         return {success: false, error: `${error}. ${e.response.data.message}`}
//     }
// }

export default request;
