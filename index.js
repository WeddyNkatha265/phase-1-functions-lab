// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  // Scuber's headquarters is on 42nd Street
  const hqLocation = 42;

  // Calculate the absolute difference between pickupLocation and hqLocation
  const blocksAway = Math.abs(pickupLocation - hqLocation);

  return blocksAway;
}

// Example usage:
console.log(distanceFromHqInBlocks(50)); // Should return 8
console.log(distanceFromHqInBlocks(43)); // Should return 1
console.log(distanceFromHqInBlocks(34)); // Should return 8

function distanceFromHqInFeet(blocksAway) {
  const distance = distanceFromHqInBlocks(blocksAway) * 264;
  return distance;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
  const feet = Math.abs((destination - start) * 264);
  return feet;
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
