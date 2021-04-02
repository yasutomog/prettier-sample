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

fooBar(
  111,
  {
    hoge: 'bura!',
  },
  profile
);

// Check the user's job title
if ((user.jobTitle = 'manager')) {
  // user.jobTitle is now incorrect
  debugger;
}
