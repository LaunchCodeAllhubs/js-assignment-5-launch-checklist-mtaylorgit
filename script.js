// Write your JavaScript code here!

window.addEventListener("load", function() {
  
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      
      //here retrieve input values that need validated from the DOM
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if(pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value ==="" ||cargoMassInput.value === "") {
          alert("All fields are required!");
         
      } else {
        
        formSubmission(document, "faultyItems", pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);//added this else to test the submission
      }
      event.preventDefault();//necessary to prevent page reload
    });
     
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});