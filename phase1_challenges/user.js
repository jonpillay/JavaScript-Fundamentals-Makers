class User {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name
  }

  getIntroduction() {
    return 'Hi, my name is ' + this.name
  }
}

const user = new User('Uma')

console.log(user.getIntroduction())

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {

  constructor (users) {
    this.users = users
  };

  getNames() {
    return this.users.map(user => user.getName())
  };

  getIntroductions() {
    return this.users.map(user => 'Hi, my name is ' + user.getName())
  }
};

const user_base = new UserBase(users)

console.log(user_base.getNames())

console.log(user_base.getIntroductions())