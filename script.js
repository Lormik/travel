// distance is in km and to 1dp

// create a random distance
// if no argument passed, create a number between 0 and 100.
const distance = (dist) => {
    if (arguments.length === 0) {
        // before decimal point
        let pre = Math.floor(Math.random() * 100);
        // after deimal point
        let post = Math.floor(Math.random() * 10)/10;
        // merge
        let num = pre + post;
        return num;
    } else if (arguments.length > 0) {
        // before decimal point
        let pre = Math.floor(Math.random() * dist);
        // after decimal point
        let post = Math.floor(Math.random() * 10)/10;
        // merge
        let num = pre + post;
    }
}


// 4 Directions that can be taken left, right, forward, go back 
const options = ['left', 'right', 'forward', 'go back'];

// randomly pick a direction to go
const way = () => {
    return options[Math.floor(Math.random() * options.length)];
}

//input is the distance we want to travel, if no input we will do a random journey
const route = (num) => {

    if (arguments.length === 0) {
        let num = distance();
    }

    // Create distance remaining counter remDist
    let remDist = num - 0;

    // Create empty array to store direction/length instruction strings
    let whichWay = [];

    // while distRem > 0.5 choose a random distance/direction 
    // if dist rem < 0.5 pick random direction and go that far
    while (remDist > 0) {
        if (remDist <= 0.5) {
            // random direction
            let dir = way();
            
            // distance will be remDist
            
            // merge dir and remDist and push to instruction array
            whichWay.push(`${dir} for ${remDist}`);
            
            // set remDist to 0 to end loop
            remDist = 0;

        } else if (remDist > 0.5) {
            // direction
            let dir = way();
            
            // distance
            let dist = distance(remDist);
            
            // merge dir and dist
            whichWay.push(`${dir} for ${dist}`);
            
            //take distance off counter
            remDist = remDist - dist;
        }
    }

    return whichWay;

    // if dist rem > 0.5 pick random distance between 0 and rem 

    // join array to form output of directions
    // first how far you want to go
    // then step by step directionss
    // final statement saying oh no we are lost

}


// Output builder