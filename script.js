// random direction generator


// random distance total

// distance is in km and to 1dp
// function to create a random distance
const distance = (dist) => {
    if (arguments.length === 0) {
        let pre = Math.floor(Math.random() * 50);
        let post = Math.floor(Math.random() * 10)/10;
        let num = pre + post;
        return num;
    } else if (arguments.length > 0) {
        let pre = Math.floor(Math.random() * dist);
        let post = Math.floor(Math.random() * 10)/10;
        let num = pre + post;
    }
}

// number of turns/breakpoints
// Each distance must be at least 0.5km
// If distance < 0.5km this will go to the end
// 4 Directions that can be taken left, right, forward, go back 

// pick a direction to go
const options = ['left', 'right', 'forward', 'go back'];
const way = () => {
    return options[Math.floor(Math.random() * options.length)]
}

//input is the distance to travel
const route = (num) => {
    // Create distance remaining counter rem
    let remDist = num - 0;

    // Create empty array to store directions and lengths
    let whichWay = [];

    // if dist rem < 0.5 pick direction and go that far
    while (remDist > 0) {
        if (remDist < 0.5) {
            // direction
            let dir = way();
            
            // distance
            
            // merge dir and dist
            whichWay.push(`${dir} for ${remDist}`);
            
            // take distance off counter
            remDist = 0;

        } else if (remDist >= 0.5) {
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