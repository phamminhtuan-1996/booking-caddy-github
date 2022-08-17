export function convertDateToVN(value) {
    const getDate = new Date(value);
    const resultDate = new Intl.DateTimeFormat("vi-VN").format(getDate);
    return resultDate;
}

export function convertTimeToVn(value) {
    const getTimeHours = new Date(value).getHours();
    const getTimeGetMinutes = new Date(value).getMinutes();
    const getTimeMinutes = String(getTimeGetMinutes).padStart(2, '0');
    return {
        hours: getTimeHours,
        minute: getTimeMinutes,
        all: getTimeHours +':'+getTimeMinutes
    };
}

export function getTimeComputer() {
    const Today = new Date();
    const getTimeHours = new Date(Today).getHours();
    const getTimeGetMinutes = new Date(Today).getMinutes();
    const getTimeMinuteString = String(getTimeGetMinutes).padStart(2, '0');
    const getTimeMinutes = Number(getTimeMinuteString);
    return {
        hours: getTimeHours,
        minute: getTimeMinutes,
        all: getTimeHours +':'+getTimeMinutes
    };
}