"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobile = exports.getOS = exports.getBrowser = exports.matchEmail = exports.validUrl = exports.validNum = exports.validEmail = exports.randNum = exports.randStr = exports.ucwords = exports.fupper = exports.trims = void 0;
var crypto_1 = __importDefault(require("crypto"));
var trims = function (str, char) { return __awaiter(void 0, void 0, void 0, function () {
    var regex;
    return __generator(this, function (_a) {
        char = char || '';
        regex = new RegExp("(^s*" + char + ")|(" + char + "s*$)", 'gm');
        str = str.trim();
        str = str.replace(/\r\n|\r|\n|\t/gm, '');
        str = str.replace(regex, '');
        return [2, str.trim()];
    });
}); };
exports.trims = trims;
var fupper = function (str) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2, str.toLowerCase().charAt(0).toUpperCase() + str.slice(1)];
}); }); };
exports.fupper = fupper;
var ucwords = function (str) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
                return $1.toUpperCase();
            })];
    });
}); };
exports.ucwords = ucwords;
var randStr = function (count, m) { return __awaiter(void 0, void 0, void 0, function () {
    var maxLength, hash, alphaNum, val;
    return __generator(this, function (_a) {
        maxLength = count || 64;
        hash = crypto_1.default
            .createHash('sha512')
            .update(new Date().toISOString())
            .digest('hex');
        alphaNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        val = '';
        while (val.length < maxLength / 2) {
            val += alphaNum.charAt(Math.floor(Math.random() * alphaNum.length + 0));
        }
        val = val + hash;
        val = val.substr(0, maxLength);
        return [2, m ? val : val.toLowerCase()];
    });
}); };
exports.randStr = randStr;
var randNum = function (count) { return __awaiter(void 0, void 0, void 0, function () {
    var num;
    return __generator(this, function (_a) {
        count = count || 10;
        num = Math.random().toString();
        num = num.replace(/[^0-9]/, '');
        num = num.substr(1, count);
        num = parseInt(num);
        return [2, num];
    });
}); };
exports.randNum = randNum;
var validEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var regex;
    return __generator(this, function (_a) {
        regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return [2, regex.test(email)];
    });
}); };
exports.validEmail = validEmail;
var validNum = function (num) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2, /^[0-9]+$/.test(num.toString())];
}); }); };
exports.validNum = validNum;
var validUrl = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var regex;
    return __generator(this, function (_a) {
        regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/i;
        return [2, regex.test(url)];
    });
}); };
exports.validUrl = validUrl;
var matchEmail = function (content) { return __awaiter(void 0, void 0, void 0, function () {
    var regex;
    return __generator(this, function (_a) {
        content = content.toString();
        regex = new RegExp('([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)', 'gm');
        return [2, content.match(regex) || []];
    });
}); };
exports.matchEmail = matchEmail;
var getBrowser = function (agent) { return __awaiter(void 0, void 0, void 0, function () {
    var browserList, theBrowser, _i, browserList_1, browser;
    return __generator(this, function (_a) {
        browserList = [
            'MSIE',
            'Trident',
            'Edge',
            'Kaios',
            'Firefox',
            'Opr',
            'Samsungbrowser',
            'YaBrowser',
            'Yowser',
            'Chrome',
            'Safari',
            'Netscape',
            'Maxthon',
            'Konqueror',
            'Mobile',
            'UCBrowser',
            'UCWEB',
        ];
        theBrowser = 'Other';
        for (_i = 0, browserList_1 = browserList; _i < browserList_1.length; _i++) {
            browser = browserList_1[_i];
            if (agent.match(new RegExp(browser, 'gmi'))) {
                theBrowser = browser;
                break;
            }
        }
        if (theBrowser === 'MSIE' || theBrowser === 'Trident') {
            return [2, 'Internet Explorer'];
        }
        else if (theBrowser === 'kaios') {
            return [2, 'Kaios Browser'];
        }
        else if (theBrowser === 'Opr' || theBrowser === 'opr') {
            return [2, 'Opera'];
        }
        else if (theBrowser === 'samsungbrowser') {
            return [2, 'Samsung Browser'];
        }
        else if (theBrowser === 'mobile') {
            return [2, 'Handheld Browser'];
        }
        else if (theBrowser === 'UCBrowser' || theBrowser === 'UCWEB') {
            return [2, 'UC Browser'];
        }
        else if (theBrowser === 'YaBrowser' || theBrowser === 'Yowser') {
            return [2, 'Yandex Browser'];
        }
        return [2, theBrowser];
    });
}); };
exports.getBrowser = getBrowser;
var getOS = function (agent) { return __awaiter(void 0, void 0, void 0, function () {
    var osList, theOs, i;
    return __generator(this, function (_a) {
        osList = {
            'windows nt 10': 'Windows 10',
            'windows nt 6.3': 'Windows 8.1',
            'windows nt 6.2': 'Windows 8',
            'windows nt 6.1': 'Windows 7',
            'windows nt 6.0': 'Windows Vista',
            'windows nt 5.2': 'Windows Server 2003/XP x64',
            'windows nt 5.1': 'Windows XP',
            'windows xp': 'Windows XP',
            'windows nt 5.0': 'Windows 2000',
            'windows me': 'Windows ME',
            win98: 'Windows 98',
            win95: 'Windows 95',
            win16: 'Windows 3.11',
            'macintosh|mac os x': 'Mac OS X',
            mac_powerpc: 'Mac OS 9',
            ubuntu: 'Ubuntu',
            'Red Hat': 'Red Hat',
            android: 'Android',
            linux: 'Linux',
            iphone: 'iPhone',
            ipod: 'iPod',
            ipad: 'iPad',
            blackberry: 'BlackBerry',
            'webos|wos': 'Mobile',
        };
        theOs = 'Other';
        for (i in osList) {
            if (agent.match(new RegExp(i, 'gmi'))) {
                theOs = osList[i];
                break;
            }
        }
        return [2, theOs];
    });
}); };
exports.getOS = getOS;
var isMobile = function (agent) { return __awaiter(void 0, void 0, void 0, function () {
    var mobiles;
    return __generator(this, function (_a) {
        mobiles = [
            'kaios',
            'samsung',
            'meego',
            'avantgo',
            'playbook',
            'opera m',
            'symbian',
            'midp',
            'wap',
            'android',
            'bolt',
            'boost',
            'docomo',
            'fone',
            'blazer',
            'hiptop',
            'phone',
            'mini',
            'tablet',
            'iphone',
            'ipod',
            'ipad',
            'blackberry',
            'webos',
            'wos',
            'UCBrowser',
            'UCWEB',
            'mobi',
        ];
        if (agent.match(new RegExp(mobiles.join('|'), 'gmi')))
            return [2, 'Mobile'];
        return [2, 'Desktop'];
    });
}); };
exports.isMobile = isMobile;
