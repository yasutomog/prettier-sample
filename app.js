class Person {
  constructor(name) {
    this.name = name;
  }
}

const profile = {
  name: 'soarflat',
  sex: 'male',
  location: 'Tokyo',
};

const hoge = (message) => {
  console.log(message);
};

const fooBar = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

Person.prototype.name;
hoge();

fooBar(
  111,
  {
    hoge: 'bura!',
  },
  profile
);

(function () {
  'use strict';

  let hogehogehogeho = 2222222;
  console.log(hogehogehogeho);

  var func1 = function (a, b) {
    return a + b;
  };
  var result = func1(1, 3);
  console.log(result);
  let aaa = 11231243124;
  console.log(aaa);
})();
