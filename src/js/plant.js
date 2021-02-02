// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   };
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   };
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   };
// };

// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   };
// };


// This is a function factory. We can easily create more specific functions that alter 
//a plant's soil, water, and light to varying degrees.
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })

  }
}

//let plant = { soil: 0, light: 0, water: 0 }

//const greenFood = changeState("soil")(10);
//const yuckyFood = changeState("soil")(-5);
//const happyMood = changeState("happy")(5);

// This function stores our state.
export const storeState = () => {
  let currentState = {};
  //let currentState = { soil: 0, light: 0, water: 0 };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

// export { changeState, storeState, stateControl as plantStates }
// const fedPlant = stateControl(blueFood); //new State = blueFood(currentState), blueFood invokes changeState
// console.log(fedPlant);
// const plantFedAgain = stateControl(greenFood);
// console.log(plantFedAgain);

// const storeState = (initialState) => {
//   //let currentState = {};
//   //let currentState = { soil: 0, light: 0, water: 0 };
//   let currentState = initialState;
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   }
// }

// const stateControl = storeState(plant);
// const fedPlant = stateControl(blueFood); //new State = blueFood(currentState), blueFood invokes changeState
// console.log(fedPlant);
// const plantFedAgain = stateControl(greenFood);
// console.log(plantFedAgain);




//console.log(plant);
//console.log(blueFood(plant));
//console.log(greenFood(plant));
//console.log(yuckyFood(plant));
//console.log(happyMood(plant));
//changePlantState(plant, "soil")