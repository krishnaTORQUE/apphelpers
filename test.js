const { ucwords } = require('./index');

(async () => {
  const str = await ucwords('hello world');
  console.log(str);
})();
