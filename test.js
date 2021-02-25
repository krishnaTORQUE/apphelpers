const { ucwords, matchEmail } = require('./index');

(async () => {
  const str = await ucwords('hello world');
  console.log(str);
  // return Hello World

  const content = 'Hello sir / mam "name@email.com" How are you?';
  console.log(await matchEmail(content));
  // return [ 'name@email.com' ]
})();
