const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(stations, registeredUsers){
    this.stations = {
      'Glasgow': [],
      'Manchester': [],
      'Leeds': []
    };
    this.registeredUsers = {
      username: 'George12',
      username: 'James23',
      username: 'John34'
      
  };
}


  registerUser(username, password, age){
    const newUser = new User(username, password, age)
    // this.registeredUsers[username] = newUser;
    //check if already registered
    if (this.registeredUsers[username] === newUser){
      throw Error ('already registered')
    }
    //check if user is over 18
    if (newUser.age < 18){
      throw Error ('Too young to register')
    }
  }



  loginUser(username, password){
    const user = this.registeredUsers[username]
    if (user.password === password){
      user.loggedIn = true;
    } else {
      throw Error ('Incorrect password entered')
    }
  }
  logoutUser(username){
    const user = this.registeredUsers[username]
    user.loggedIn = false;
  }
  createScooter(station){
    const newScooter = new Scooter()
    this.stations[station].push(newScooter)
  }
  dockScooter(scooter,station){
    this.stations[station].push(scooter)
  }
  rentScooter(scooter, user){
    if (user.loggedIn === true){
      user.scooter = scooter
    } else {
      throw Error ('User is not logged in')
    }
  }
  print(){}
};

module.exports = ScooterApp
