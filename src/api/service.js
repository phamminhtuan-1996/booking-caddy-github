import axios from 'axios';
import {
    URL,
    GET_BOOKING_DETAILS,
    RAW_JSON,
    GET_INFO_DETAILS_BDC,
    SEARCH_LIST_SHIFT,
    GET_PROFILE,
    GET_LANGUAGES,
    LIST_LANGUAGE
} from '@/api/constant.js';
import { postBody } from '@/api/request-options.js';
import { handleCheckLogin } from '@/api/handle-response.js';

export async function fetchBookingDetailsId(value) {
    const res = await axios.post(URL + GET_BOOKING_DETAILS, postBody(value), RAW_JSON).then((res) => handleCheckLogin(res));
    return res;
}

export async function fetchBookingDetails(value) {
    const res = await axios.post(URL + GET_INFO_DETAILS_BDC, postBody(value), RAW_JSON).then((res) => handleCheckLogin(res));
    return res;
}

export async function searchListShift(value) {
    const res = await axios.post(URL + SEARCH_LIST_SHIFT, postBody(value), RAW_JSON).then((res) => handleCheckLogin(res));
    return res;
}

export async function fetchDataProfileCaddy(value) {
    const res = await axios.post(URL + GET_PROFILE,  postBody(value), RAW_JSON).then((res) => handleCheckLogin(res));
    return res;
}

export async function getTranslate(value) {
    const res = await axios.post(URL + GET_LANGUAGES, postBody(value), RAW_JSON).then((res) => handleCheckLogin(res));
    return res;
}

export async function getLanguages(value) {
    const res = await axios.post(URL + LIST_LANGUAGE, postBody(value), RAW_JSON).then((res) => handleCheckLogin(res));
    return res;
}