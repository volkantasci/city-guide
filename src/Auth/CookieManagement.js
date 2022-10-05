import Cookies from "js-cookie"
const getCookie = (name) => {
    return Cookies.get(name);
}
const setCookie = (name, value) => {
    Cookies.set(name, value);
}
const removeCookie = (name) => {
    Cookies.remove(name);
}
export {
    getCookie,
    setCookie,
    removeCookie
};