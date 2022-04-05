export const VALID_EMAIL_REG =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const VALID_PASSWORD_REG = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/i;

export const VALID_FIRST_NAMES = /^([a-zA-Z]+?)([-\s'][a-zA-Z]+)*?$/i;
export const VALID_DAY =
    /(?:\b|\/|-)((?:[1-9]|0[1-9]|[1-2][0-9]|3[0-1])(?:\b|\/|-))/i;
export const VALID_MONTH = /^(0?[1-9]|1[012])$/i;
export const VALID_YEAR = /^(?:19|20)\d{2}/i;
