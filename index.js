// Code your solution in this file!
const returnFirstTwoDrivers = function(names) {
    return names.slice(0,2);
}
const returnLastTwoDrivers = function(names) {
    return names.slice(names.length - 2,names.length)
    
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){

    return function(fare) { 
        return fare*multiplier

    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(names,returnFunc) {
    return returnFunc(names)
}
console.log (selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers))

