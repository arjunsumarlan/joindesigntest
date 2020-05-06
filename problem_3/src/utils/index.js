var _charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%.@";

function generateKey() {
    let str = "";
    let tar;
    tar = [];
    for (let c = 0; c < _charset.length; c++) {
        tar.push(_charset.substr(c, 1));
    }
    for (let c = 0; c < _charset.length; c++) {
        str += tar.splice(Math.round(Math.random() * (tar.length - 1)), 1);
    }
    return str;
}

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const fakeAuth = {
    isAuthenticated: false,
    async getAuthentication() {
        const key = await localStorage.getItem('k');
        const encrypted = await localStorage.getItem('e');
        if (key && encrypted) {
            fakeAuth.isAuthenticated = true;
            return true;
        }

        fakeAuth.isAuthenticated = false;
        return false;
    },
    async authenticate(data, cb) {
        const { email, password } = data;

        if (email === 'support@jointprint.com.hk' && password === 'support@jointprint.com.hk') {
            fakeAuth.isAuthenticated = true;
            const key = generateKey();
            const encryptedData = {
                email: encrypt(email, key),
                password: encrypt(password, key)
            }
            await localStorage.setItem('e', JSON.stringify(encryptedData));
            await localStorage.setItem('k', key);
            cb(true); // fake async
            return;
        }

        setTimeout(cb(false), 100); // fake async
    },
    async signout(cb) {
        fakeAuth.isAuthenticated = false;
        await localStorage.clear();
        cb();
    }
};

export function encrypt(v, _key) {
    let str = "";
    let key = _key;
    if (_key.length > 0 && v.length > 0) {
        //v = Server.URLEncode(v);
        for (let c = 0; c < v.length; c++) {
            let ch = _charset.indexOf(v.substr(c, 1));
            if (ch > -1) {
                str += key.substr(ch, 1);
                key = rotateKey(key, v.charCodeAt(c));
            }
        }
        return str;
    } else {
        return "";
    }
}

export function decrypt(v, _key) {
    let str = "";
    let key = _charset;
    if (_key.length > 0 && v.length > 0) {
        for (let c = 0; c < v.length; c++) {
            let ch = _key.indexOf(v.substr(c, 1));
            if (ch > -1) {
                str += key.substr(ch, 1);
                key = rotateKey(key, -key.charCodeAt(ch));
            }
        }
        return str;
    } else {
        return "";
    }
}

function rotateKey(s, amt) {
    amt = amt % s.length;
    if (amt < 0) {
        amt = s.length + amt;
    }
    if (amt !== 0) {
        return s.substr(s.length - amt, amt) + s.substr(0, s.length - amt);
    } else {
        return unescape(s);
    }
}