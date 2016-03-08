"use strict";
function login(email, password, callback) {
    callback = arguments[arguments.length - 1];
    if (getToken()) {
        if (callback) {
            callback(true);
        }
        this.onChange(true);
        return;
    }
    pretendRequest(email, password, (res) => {
        if (res.authenticated) {
            localStorage.setItem("token", res.token);
            if (callback)
                callback(true);
            this.onChange(true);
        }
        else {
            if (callback)
                callback(false);
            this.onChange(false);
        }
    });
}
exports.login = login;
function getToken() {
    return localStorage.getItem("token");
}
exports.getToken = getToken;
function logout(callback) {
    localStorage.removeItem("token");
    if (callback)
        callback();
    this.onChange(false);
}
exports.logout = logout;
function loggedIn() {
    return !!getToken();
}
exports.loggedIn = loggedIn;
function onChange(loggedIn) {
}
exports.onChange = onChange;
function pretendRequest(email, pass, callback) {
    setTimeout(() => {
        if (email === 'zferraro@gmail.com' && pass === 'password1') {
            callback({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            });
        }
        else {
            callback({ authenticated: false });
        }
    }, 0);
}
//# sourceMappingURL=auth.js.map