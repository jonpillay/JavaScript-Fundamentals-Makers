class Thermostat{

  constructor() {
    this.temp = 20
    this.powersaving = true
  }

  getTemperature() {
    return this.temp
  }

  setPowerSavingMode(bool) {
    this.powersaving = bool;
  }

  up() {
    if (this.powersaving == false) {
      this.temp +=1;
    } else if (this.getTemperature() < 25 ) {
      this.temp += 1;
    } else { 
      // do nothing
    }
  }

  down() {
    if (this.getTemperature() > 10) {
      this.temp -= 1
    }
  }

  reset() {
    this.temp = 20
  }
}

module.exports = Thermostat


/*
const thermostat = new Thermostat();



console.log(thermostat.getTemperature()) // should return 20

thermostat.up();
thermostat.up();
console.log(thermostat.getTemperature())// should now return 22

thermostat.down();
console.log(thermostat.getTemperature()) // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

console.log(thermostat.getTemperature()) // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
console.log(thermostat.getTemperature()) // should now return 26

thermostat.reset();
console.log(thermostat.getTemperature()) // should be back to 20
*/