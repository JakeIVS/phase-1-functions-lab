// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    //returns number of blocks given a value
    let distance;
    value  < 42 ? (distance = 42 - value) : (distance = value - 42)
    return distance;
}

function distanceFromHqInFeet(value) {
    let feetDistance=distanceFromHqInBlocks(value)*264;
return feetDistance;
}

function distanceTravelledInFeet(start, end){
    let travelDistance;
    start > end ? (travelDistance = start - end) : (travelDistance = end - start);
    return travelDistance*264;
}

function calculatesFarePrice(start, end) {
    let price;
    let length = distanceTravelledInFeet(start, end)
    if (length <= 400) {
        return price = 0;
    } else if (length <=2000){
        return price = (length-400)*.02;
    } else if (length <=2500){
        return price = 25;
    } else {
        return 'cannot travel that far';
    }
}
