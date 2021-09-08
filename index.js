// Code your solution here
findMatching = (drivers,name) => {
  return drivers.filter( x => x.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( x => x.slice(0, string.length) === string);
}

function matchName(drivers, string) {
    return drivers.filter(x => x.name === string); 
}