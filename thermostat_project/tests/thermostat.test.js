const Thermostat = require('../thermostat');

describe('thermostat', () => {
  it ('creates, runs and tests the thermostat', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)

    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22)

    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21)

    thermostat.setPowerSavingMode(true)

    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up()
    }

    expect(thermostat.getTemperature()).toEqual(25)

    thermostat.setPowerSavingMode(false)

    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(26)

    thermostat.reset()
    expect(thermostat.getTemperature()).toEqual(20)
  })
});