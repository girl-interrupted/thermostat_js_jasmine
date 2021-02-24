'use strict';

class Thermostat{
  constructor() {
    this.MIN_TEMPERATURE = 10;
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
    this.PSM_ON_MAX_LIMIT = 25;
    this.PSM_OFF_MAX_LIMIT = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaxTemperature()) {
      return;
    }
    this.temperature +=1
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -=1
  }

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    return this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    return this.powerSavingMode = true;
  }

  isMaxTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.PSM_OFF_MAX_LIMIT;
    }
    return this.temperature === this.PSM_ON_MAX_LIMIT;
  }

  resetTemp(){
    this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
};