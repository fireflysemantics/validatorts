var validator = require('validator');

['foo', 'bar', 'foobar'].forEach((v) => {
  if (!validator.isIn(v, { foo: 1, bar: 2, foobar: 3 })) {
    console.log(`The value ${v} is not in the object`);
  }
});