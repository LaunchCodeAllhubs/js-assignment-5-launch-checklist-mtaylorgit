// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  /*
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: </li>
                   <li>Diameter: </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: </li>
                   <li>Number of Moons: </li>
               </ol>
               <img src="">
  */
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
  //this function will use the function validateInput, and take in a document parameter and strings representing the 4 fields, using the values in those strings and the document parameter for your HTML document, update the shuttle requirements.

  //Check pilot status
  if (validateInput(pilot) === "Not a Number") {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
  } else {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is not ready for launch`;
  }
  //check co-pilot status 
  if (validateInput(copilot) === "Not a Number") {
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
  } else {
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is not ready for launch`;
  }
  //check fuel status
  if (validateInput(fuelLevel) === "Is a Number") {
    if (fuelLevel >= 10000) {
    document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
    } else {
     document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
    }
  } else {
    document.getElementById("fuelStatus").innerHTML = `Please submit a number`;//not sure
  }
  //check cargo mass
  if (validateInput(cargoLevel) === "Is a Number") {
    if (cargoLevel < 10000) {
    document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    } else {
     document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
    }
  } else {
    document.getElementById("cargoStatus").innerHTML = `Please submit a number`;//not sure
  }
  document.getElementById(list).style.visibility = "visible";
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function(response) {
  });

  return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;