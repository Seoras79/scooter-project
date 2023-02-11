const User = require('../src/User');
const Scooter = require('../src/Scooter');
const ScooterApp = require('../src/ScooterApp')

// User tests here
describe('User instance integrity checks', () => {
    const user1 = new User("george12", "pass333", 43);

    // test instance has username, password and age
    test('New instance of User created', () => {
        expect(user1).toHaveProperty("username");
        expect(user1).toHaveProperty("password");
        expect(user1).toHaveProperty("age");
        expect(typeof user1.loggedIn).toBe("boolean");
        
      });


// test login

    //if password is correct, log in user. If not, throw incorrect password error
    test('if password is correct, logs in, if not throw incorrect password error', () => {
        expect(user1.password).toMatch(registerUser.password);
        expect(() => user2.login()).toThrow('password is incorrect');
    });


// test logout

    test('user logs out', () => {
        expect(user1.password).toMatch(registerUser.password);
        expect(() => user2.login()).toThrow('password is incorrect');
    });
});

