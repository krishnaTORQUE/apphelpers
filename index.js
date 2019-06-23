module.exports = class apphelpers {
    /**
     * Trim Mod
     */
    async trims(str, char) {
        if (typeof char === 'undefined') {
            char = '';
        }
        let regex = new RegExp(`(^\s*${char})|(${char}\s*$)`, 'gm');
        str = str.trim();
        str = str.replace(/\r\n|\r|\n|\t/gm, '');
        str = str.replace(regex, '');
        return str.trim();
    }
    /**
     * Upper Case First Letter
     */
    async fupper(str) {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    /**
     * PHP UC Words
     */
    async ucwords(str) {
        return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, ($1) => {
            return $1.toUpperCase();
        });
    }
    /**
     * Random String
     * Max Length 40
     */
    async randStr(length) {
        if (typeof length === 'undefined') {
            length = 40;
        }
        let value = '';
        let letnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            value += letnum.charAt(Math.floor((Math.random() * letnum.length) + 0));
        }
        return value.toString();
    }
    /**
     * Random Number
     * Max Length 10
     */
    async randNum(length) {
        if (typeof length === 'undefined') {
            length = 10;
        }
        let num = Math.random().toString();
        num = num.replace(/[^0-9]/, '');
        return num.substr(1, length);
    }
    /**
     * Valid Number
     */
    async validNum(num) {
        return (/^[0-9]+$/).test(num);
    }
    /**
     * Valid Email
     */
    async validEmail(email) {
        let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return (regex.test(email));
    }
    /**
     * Valid Url
     */
    async validUrl(url) {
        let regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/i;
        return (regex.test(url));
    }
    /**
     * Client Browser
     */
    async getBrowser(agent) {
        let browsers_list = [
            'msie',
            'Trident',
            'edge',
            'kaios',
            'firefox',
            'opr',
            'samsungbrowser',
            'chrome',
            'safari',
            'netscape',
            'maxthon',
            'konqueror',
            'mobile',
            'UCBrowser',
            'UCWEB'
        ];

        let get_brow = false;
        let browsers_list_length = browsers_list.length;
        for (let j = 0; j < browsers_list_length; j++) {
            let the_sbrowser = new RegExp(browsers_list[j], 'gi');
            if (agent.match(the_sbrowser)) {
                get_brow = browsers_list[j];
                break;
            }
        }
        if (get_brow && get_brow !== 'undefined') {

            if (get_brow === 'MSIE' || get_brow === 'Trident') {
                return 'Internet Explorer';

            } else if (get_brow === 'kaios') {
                return 'Kaios Browser';

            } else if (get_brow === 'Opr') {
                return 'Opera';

            } else if (get_brow === 'samsungbrowser') {
                return 'Samsung Browser';

            } else if (get_brow === 'mobile') {
                return 'Handheld Browser';

            } else if (get_brow === 'UCBrowser' || get_brow === 'UCWEB') {
                return 'UC Browser';

            } else {
                return get_brow;
            }
        } else {
            return 'Other';
        }
    }
    /**
     * Client OS
     */
    async getOS(agent) {
        let os = 'Other';
        let os_arr = {
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
            'win98': 'Windows 98',
            'win95': 'Windows 95',
            'win16': 'Windows 3.11',
            'macintosh|mac os x': 'Mac OS X',
            'mac_powerpc': 'Mac OS 9',
            'ubuntu': 'Ubuntu',
            'Red Hat': 'Red Hat',
            'android': 'Android',
            'linux': 'Linux',
            'iphone': 'iPhone',
            'ipod': 'iPod',
            'ipad': 'iPad',
            'blackberry': 'BlackBerry',
            'webos|wos': 'Mobile'
        };

        let obj_length = Object.keys(os_arr).length;
        for (let i = 0; i < obj_length; i++) {
            let regex = new RegExp(Object.keys(os_arr)[i], 'gi');
            if (agent.match(regex)) {
                os = os_arr[Object.keys(os_arr)[i]];
                break;
            }
        }
        return os;
    }
    /**
     * Check Mobile
     */
    async isMobile(agent) {
        let mobHeader = `kaios|samsungbrowser|samsung|meego|avantgo|playbook|opera m|symbian|smartphone|midp|wap|android|bolt|boost|docomo|fone|blazer|hiptop|phone|mini|tablet|iphone|ipod|ipad|blackberry|webos|wos|UCBrowser|UCWEB|mobile|mobi`;

        if (agent.match(new RegExp(mobHeader, 'gmi'))) {
            return 'Mobile';
        }
        return 'Desktop';
    }
}
