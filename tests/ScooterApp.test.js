const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// write tests for ScooterApp
describe('ScooterApp instance integrity checks', () => {
    const scooterApp1 = new ScooterApp();

    // test instance has object for stations and registeredUsers
    test('New instance of ScooterApp created', () => {
        expect(scooterApp1).toHaveProperty("stations");
        expect(scooterApp1).toHaveProperty("registeredUsers");
        expect(typeof scooterApp1.stations).toBe("object");
        expect(typeof scooterApp1.registeredUsers).toBe("object");
    }); 
});
// create test for registerUser method
describe('registerUser method', () => {
    const scooterApp1 = new ScooterApp();

    test('registerUser method creates new user', () => {
        expect(scooterApp1.registerUser()).toHaveProperty("username");
        expect(scooterApp1.registerUser()).toHaveProperty("password");
        expect(scooterApp1.registerUser()).toHaveProperty("age");
        expect(typeof scooterApp1.registerUser()).toBe("object");
    });
    test ('registerUser method throws error if user is already registered', () => {
        expect(scooterApp1.registerUser()).toThrow('already registered');
    });
});

// log in



// log out

// rent scooter

// dock scooter
