import crypto from 'crypto';

/**
 * Trim Modify
 * @param {str} string
 * @param {char} Regex
 */
export const trims = async (str: string, char?: string): Promise<string> => {
  char = char || '';
  const regex: RegExp = new RegExp(`(^\s*${char})|(${char}\s*$)`, 'gm');
  str = str.trim();
  str = str.replace(/\r\n|\r|\n|\t/gm, '');
  str = str.replace(regex, '');
  return str.trim();
};
/**
 * First Upper Word
 * @param {str} string
 */
export const fupper = async (str: string): Promise<string> =>
  str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
/**
 * UC Words
 * @param {str} string
 */
export const ucwords = async (str: string): Promise<string> =>
  (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, ($1) =>
    $1.toUpperCase()
  );
/**
 * Random String
 * @param {count} number How Long The String will be
 * @param {m} boolean Mix Letter (Upper & Lower Case)
 */
export const randStr = async (count?: number, m?: boolean): Promise<string> => {
  const maxLength: number = count || 64;
  const hash: string = crypto
    .createHash('sha512')
    .update(new Date().toISOString())
    .digest('hex');

  const alphaNum: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let val: string = '';
  while (val.length < maxLength / 2) {
    val += alphaNum.charAt(Math.floor(Math.random() * alphaNum.length + 0));
  }
  val = val + hash;
  val = val.substr(0, maxLength);
  return m ? val : val.toLowerCase();
};
/**
 * Random Number
 * @param {count} number How Long The Number will be
 */
export const randNum = async (count?: number): Promise<number> => {
  count = count || 10;
  let num: string | number = Math.random().toString();
  num = num.replace(/[^0-9]/, '');
  num = num.substr(1, count);
  num = parseInt(num);
  return num;
};
/**
 * Valid Email
 * @param {email} string
 */
export const validEmail = async (email: string): Promise<boolean> => {
  const regex: any = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regex.test(email);
};
/**
 * Valid Number
 * @param {num} string | number
 */
export const validNum = async (num: string | number): Promise<boolean> =>
  /^[0-9]+$/.test(num.toString());
/**
 * Valid Url
 * @param {url} string
 */
export const validUrl = async (url: string): Promise<boolean> => {
  const regex: any = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/i;
  return regex.test(url);
};
/**
 * Client Browser
 * @param {agent} string Useragent
 */
export const getBrowser = async (agent: string): Promise<string> => {
  const browserList: string[] = [
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
  let theBrowser: string = 'Other';
  for (let browser of browserList) {
    if (agent.match(new RegExp(browser, 'gmi'))) {
      theBrowser = browser;
      break;
    }
  }
  if (theBrowser === 'MSIE' || theBrowser === 'Trident') {
    return 'Internet Explorer';
  } else if (theBrowser === 'kaios') {
    return 'Kaios Browser';
  } else if (theBrowser === 'Opr' || theBrowser === 'opr') {
    return 'Opera';
  } else if (theBrowser === 'samsungbrowser') {
    return 'Samsung Browser';
  } else if (theBrowser === 'mobile') {
    return 'Handheld Browser';
  } else if (theBrowser === 'UCBrowser' || theBrowser === 'UCWEB') {
    return 'UC Browser';
  } else if (theBrowser === 'YaBrowser' || theBrowser === 'Yowser') {
    return 'Yandex Browser';
  }
  return theBrowser;
};
/**
 * Client OS
 * @param {agent} string Useragent
 */
export const getOS = async (agent: string): Promise<string> => {
  const osList: any = {
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
  let theOs: string = 'Other';
  for (let i in osList) {
    if (agent.match(new RegExp(i, 'gmi'))) {
      theOs = osList[i];
      break;
    }
  }
  return theOs;
};
/**
 * Check Mobile
 * @param {agent} string Useragent
 */
export const isMobile = async (agent: string): Promise<string> => {
  const mobiles: string[] = [
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
  if (agent.match(new RegExp(mobiles.join('|'), 'gmi'))) return 'Mobile';
  return 'Desktop';
};
