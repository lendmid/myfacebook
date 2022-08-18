import axios from "axios";
import {API_TOKENS} from "../store/constants.api";


export const parseJwt = (token: string | null) => {
    if (!token) return {}
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const updateTokens = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const config = {url: `${API_TOKENS}/refresh`, method: 'POST', data: {accessToken, refreshToken}};
    const res = await axios.request(config)
    if (res) {
        const jsonFromAccessToken = parseJwt(res.data.accessToken);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('expiresIn', jsonFromAccessToken.exp);
    }
    if (!res) {
        // todo: display error for user
    }
}

export const checkAccessTokenExpired = async () => {
    const tokenExpiredTs = localStorage.getItem('expiresIn');
    if (!tokenExpiredTs) return true

    if ((+tokenExpiredTs - 30) * 1000 <= Date.now()) {
        try {
            await updateTokens();
            // todo: return response
        } catch (e) {
            return true
        }
    }
    return false
}
