
// PLEASE NOTE I HAD TO FORK SEAN'S REPO AS I HAD AN ERROR WITH THE TEST SUITE SO HAD TO DELETE MY REPO AND START AGAIN
const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter instance integrity checks', () => {
  const scooter = new Scooter("Glasgow");

  test('New instance of scooter created', () => {
      expect(scooter).toHaveProperty("user", null);
      expect(scooter).toHaveProperty("charge");
      expect(scooter).toHaveProperty("serial");
      expect(typeof scooter.isBroken).toBe("boolean");
      expect(scooter.station).toBe("Glasgow");
      
    });
  test("serial number incrementing", () => {
    const scooter1 = new Scooter("Glasgow");
    expect(scooter1.serial).toBe(scooter.serial + 1);
  });
});

//Method tests
describe('scooter method rent', () => {
  const scooter2 = new Scooter("Glasgow");
  scooter2.charge = 10;
  const scooter3 = new Scooter("Glasgow");
  scooter3.charge = 50;
  scooter3.isBroken = true

  // Class has rent and dock methods
  test("Class has rent and dock methods", () =>{
    expect(scooter2.rent).toBeDefined();
    expect(typeof scooter2.rent).toBe("function");
    expect(scooter3.dock).toBeDefined();
    expect(typeof scooter3.dock).toBe("function");
  })


  // scooter cannot be rented if faulty
  test("scooter is not broken", () => {;
    expect(scooter2.isBroken).toBe(false);
    expect(scooter3.isBroken).toBe(true);
    expect(() => scooter3.rent()).toThrow("Scooter needs repair");
  })
  //scooter cannot be rented if low on charge
  test("scooter can't be rented is low on charge", () =>{
    expect(() => scooter2.rent()).toThrow("Scooter needs to charge");
  })

})
  
  //dock method
describe("scooter is docked", () =>{
  const scooter4 = new Scooter("Glasgow");

  test("user has been removed once docked", () => {
    expect(scooter4.user).toBe(null);
    
  })
})
  


  //requestRepair method

  //charge method
  describe("scooter method charge", () =>{
    const scooter1 = new Scooter("Glasgow");

    test("charge is above 20%", () => {
      expect(scooter1.charge).not.toBeLessThan(20);
    }) 
  })
  

