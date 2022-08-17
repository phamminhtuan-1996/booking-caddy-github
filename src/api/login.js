import axios from 'axios';
import {
    URL, 
    GET_SITE_NAME,
    SWITCH_SITE,
    RAW_JSON, 
    GET_TOKEN_LOGIN,
} from '@/api/constant.js'


export async function fetchSiteName(data) {
    const res = await axios.post(URL + GET_SITE_NAME, { 'Token': data.token, 'Lang': data.lang, 'UserName': data.username }, RAW_JSON);
    return res;
}

export async function switchSiteName(data) {
    const res = await axios.post(URL + SWITCH_SITE, {'Token': data.token, 'Lang': data.Lang, 'SiteId': data.SiteId }, RAW_JSON);
    return res;
}

export async function getTokenLogin(data) {
    const res = await axios.post(URL + GET_TOKEN_LOGIN, {'UserName': data.UserName, 'PassWord': data.PassWord}, RAW_JSON);
    return res;
}