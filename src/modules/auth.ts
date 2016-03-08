export function login(email: string, password: string, callback?: Function) : void {
    callback = arguments[arguments.length - 1];
    if (getToken()) {
        if (callback) { callback(true); }
        this.onChange(true)
        return
    }
    pretendRequest(email, password, (res: { token?: string; authenticated: boolean }) => {
        if (res.authenticated) {
            localStorage.setItem("token", res.token)
            if (callback) callback(true)
            this.onChange(true)
        } else {
            if (callback) callback(false)
            this.onChange(false)
        }
    })
}

export function getToken() : string {
    return localStorage.getItem("token");
}

export function logout(callback?: Function) : void {
    localStorage.removeItem("token");
    if (callback) callback()
    this.onChange(false)
}

export function loggedIn() : boolean {
    return !!getToken();
}

export function onChange(loggedIn: boolean) : void { 
    
}

function pretendRequest(email: string, pass: string, callback: Function) {
    setTimeout(() => {
        if (email === 'zferraro@gmail.com' && pass === 'password1') {
            callback({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            callback({ authenticated: false });
        }
    }, 0);
}