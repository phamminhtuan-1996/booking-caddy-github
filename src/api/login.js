import axios from 'axios';
import {
    URL, 
    GET_SITE_NAME,
    SWITCH_SITE,
    RAW_JSON, 
    GET_TOKEN_LOGIN,
} from '@/api/constant.js';
import { postBodyGetAuth, postBody } from '@/api/request-options.js';
import { handleCheckLogin,  notLogin } from '@/api/handle-response.js';


export async function fetchSiteName(data) {
    const res = await axios.post(URL + GET_SITE_NAME, postBodyGetAuth(data), RAW_JSON).catch(() => notLogin());
    return res;
}

export async function switchSiteName(data) {
    const res = await axios.post(URL + SWITCH_SITE, postBody(data), RAW_JSON).catch(() => notLogin());
    return res;
}

export async function getTokenLogin(data) {
    const res = await axios.post(URL + GET_TOKEN_LOGIN, {'UserName': data.UserName, 'PassWord': data.PassWord}, RAW_JSON).then((res) => handleCheckLogin(res)).catch(() => notLogin());
    return res;
}