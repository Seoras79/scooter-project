

class User {
  constructor(username,password,age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }
  login(password){
    if(password === registerUser.password){
      this.loggedIn = true;
    } else {
      throw Error ('Incorrect password entered')
    }
  }
  logout(){
    this.loggedIn = false;
    
  }
}

module.exports = User
