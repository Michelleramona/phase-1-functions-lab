//const headQuarters = 42

function distanceFromHqInBlocks(someValue){
    if (someValue > 42) {return someValue - 42
} else {return 42 - someValue};
}

//> when I do distanceFromHqInBlocks(43) I get 1...why doesn't one carry over 
//to second function? Ah. Because I didnt put the whole thing with (someValue) at the end

//did i need to make a headquarter const or just keep 42?  I could keep 42, but I feel
//like I needed to keep it?

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue)* 264;
}
 //that's why i keep getting 11k its muliplying 1 x 43 x 264
 //why can't I get my first function to work in second? Is my first function
 //incorrect?  When I check in console log - it gives me the correct output? 
 //is the second "some value" not calculating because its part of the
 //inBlocks function?

 function distanceTravelledInFeet(start, destination){
    if (start < destination) {return (destination - start)*264}
    else {return (start - destination)*264}
 }

 function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {return distance*0}
    if (distance <= 2000){return (distance-400)*0.02}
    if (distance <=2500) {return 25}
    else {return 'cannot travel that far'}
  }