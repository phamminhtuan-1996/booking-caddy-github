import axios from 'axios';
import {
    URL,
    GET_BOOKING_DETAILS,
    RAW_JSON,
    GET_INFO_DETAILS_BDC,
    SEARCH_LIST_SHIFT,
    GET_PROFILE,
} from '@/api/constant.js'

export async function fetchBookingDetailsId(value) {
    const res = await axios.post(URL + GET_BOOKING_DETAILS, 
        {'Token': value.token, 'Lang': value.Lang, 'CaddyCalendarDetailId': value.CaddyCalendarDetailId, 'BDC': value.BDC},
        RAW_JSON);
    return res;
}

export async function fetchBookingDetails(value) {
    const res = await axios.post(URL + GET_INFO_DETAILS_BDC, 
        {'Token': value.token, 'Lang': value.Lang, 'BookingDetail': {'Id': value.Id}}, 
        RAW_JSON);
    return res;
}

export async function searchListShift(value) {
    const res = await axios.post(URL + SEARCH_LIST_SHIFT, 
        {'Token': value.Token, 'StartDate': value.StartDate, 'EndDate': value.EndDate, 'Lang': value.Lang}, RAW_JSON);
    return res;
}
export async function fetchDataProfileCaddy(value) {
    const res = await axios.post(URL + GET_PROFILE, {'Token': value.Token, 'Caddy': {'Id': value.Id}, 'Lang': value.Lang}, RAW_JSON);
    return res;
}