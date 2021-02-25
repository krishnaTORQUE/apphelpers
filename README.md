# AppHelpers

Node Js Backend App Helper Functions. Almost ZERO dependency.

### Example

_**Typescript**_

```javascript
import { ucwords } from 'apphelpers';
// Async Await
(async () => {
  const str: string = await ucwords('hello world');
  console.log(str);
})();
// Callback
ucwords('hello world').then((str: string) => {
  console.log(str);
});
// return Hello World
```

_**Common Js**_

```javascript
const { ucwords } = require('apphelpers');
// Async Await
(async () => {
  const str = await ucwords('hello world');
  console.log(str);
})();
// Callback
ucwords('hello world').then((str) => {
  console.log(str);
});
// return Hello World
```

> ### List of Functions (_all return Promise_)

trims

fupper

ucwords

randStr

randNum

validEmail

validNum

validUrl

matchEmail

getBrowser

getOS

isMobile

> ### List of Todos

JSON Minify

Valid Alphabet

Match Phone Number

Is user using Proxy

> ### Notes

- Always Check `Log` before Install or Update.
- Contact or create an issue if you found any bug.
- This repository is open for Pull Request.
- It will be helpful, if you can **Sponsor**.

> ## License under GNU GPL V2
