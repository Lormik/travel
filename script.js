// distance is in km and to 1dp

// random number generator
// undefined set to 100
const randNum = (num = 100) => {
    return Math.floor(Math.random() * num) + (Math.floor(Math.random() * 10) / 10)
}

// create a random distance less than the argument
// if no argument passed, create a number between 0 and 100.
const distance = (dist = randNum()) => {
    if (dist < 1) {
        // case for distance > 1
        return dist;
    } else if (dist >= 1) {
        // case for distance > 1
        return randNum(dist);
    }
}


// 4 Directions that can be taken left, right, forward, go back 
const options = ['left', 'right', 'forward'];

// randomly pick a direction to go
const way = () => {
    return options[Math.floor(randNum(options.length))];
}

//input is the distance we want to travel, if no input we will do a random journey
const route = (num = distance()) => {

    // Create distance remaining counter remDist
    let remDist = num - 0;

    // Create empty array to store direction/length instruction strings
    const whichWay = [];

    // while distRem > 0.5 choose a random distance/direction 
    // if dist rem < 0.5 pick random direction and go that far
    while (remDist > 0) {
        if (remDist <= 1) {
            // random direction
            let dir = way();
            
            // distance will be remDist
            
            // merge dir and remDist and push to instruction array
            whichWay.push(`${dir} for ${remDist} km.`);
            
            // set remDist to 0 to end loop
            remDist = 0;

        } else if (remDist > 1) {
            // direction
            let dir = way();
            
            // distance
            let dist = distance(remDist);
            
            // merge dir and dist
            whichWay.push(`${dir} for ${dist} km`);
            
            //take distance off counter
            remDist = remDist - dist;
        }
    }

    //join array to form output of directions
    let routeDirection = `Let's travel for ${num} km. Go `  + whichWay.join(", then ") + ` Oh no, we're lost!`;
    
    // print the journey info
    console.log(routeDirection);

}


route(0.9);
route(1);
route(1.1);
route(15);
route(20);
route(100);
route(45.8);
route();