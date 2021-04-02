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
  var func1 = function (a, b) {
    return a + b;
  };
  var result = func1(1, 3);
  console.log(result);
})();
