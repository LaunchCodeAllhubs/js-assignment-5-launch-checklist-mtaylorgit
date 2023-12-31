// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name} </li>
                   <li>Diameter: ${diameter} </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance} </li>
                   <li>Number of Moons: ${moons} </li>
               </ol>
               <img src= ${imageUrl}>

  `
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let ready = true;
  //Check pilot status
  if (validateInput(pilot) === "Not a Number") {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
  } else {
    document.getElementById("pilotStatus").innerHTML = `Please submit a name`;
    ready = false;
  }
  //check co-pilot status 
  if (validateInput(copilot) === "Not a Number") {
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
  } else {
    document.getElementById("copilotStatus").innerHTML = `Please submit a name`;
    ready = false;
  }
  //check fuel status
  if (validateInput(fuelLevel) === "Is a Number") {
    if (fuelLevel >= 10000) {
      document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
    } else {
      document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
      ready = false;
    }
  } else {
    document.getElementById("fuelStatus").innerHTML = `Please submit a number`;
    ready = false;
  }
  //check cargo mass
  if (validateInput(cargoLevel) === "Is a Number") {
    if (cargoLevel < 10000) {
      document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    } else {
      document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
      ready = false;

    }
  } else {
    document.getElementById("cargoStatus").innerHTML = `Please submit a number`;
    ready = false;
  }

  if (ready === false) {
    document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
    document.getElementById("launchStatus").style.color = "#C7254E";
  } else {
    document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
    document.getElementById("launchStatus").style.color = "#419F6A";
  }
  document.getElementById(list).style.visibility = "visible";
}

async function myFetch() { //myFetch() added URL and response.json
  const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
  const planetsReturned = await response.json();
  return planetsReturned;
}



function pickPlanet(planets) {
  return planets[(Math.floor(Math.random() * planets.length))];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
