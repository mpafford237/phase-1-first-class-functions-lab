// Code your solution in this file!
// Ok!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier () {
    return function (value) {
        return (value * 5)
    }
}

function fareDoubler() {
    return 2 * createFareMultiplier()(2)
}

function fareTripler() {
    return 3 * createFareMultiplier()(2.4)
}

function selectDifferentDrivers(selectingDrivers, func) {
    if (func === returnFirstTwoDrivers) {
      return func(selectingDrivers);
    } else if (func === returnLastTwoDrivers) {
      return func(selectingDrivers);
    } else {
      console.log("Invalid function");
      return [];
    }
  }
  