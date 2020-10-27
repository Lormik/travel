// random direction generator


// random distance total
// distance is in km and to 1dp

const distance = () => {
    let pre = Math.floor(Math.random() * 100);
    let post = Math.floor(Math.random() * 10)/10;
    let num = pre + post;
    return num;
}

// number of turns/breakpoints
// Each distance must be at least 0.5km
// If distance < 0.5km this will go to the end
// 4 Directions that can be taken left, right, forward, go back 

// pick a direction to go
const options = ['left', 'right', 'forward', 'go back'];
const way = () => {
    return way[Math.floor(Math.random() * options.length)]
}

//input is the distance to travel
const directions = (num) => {
    // Create distance remaining counter rem
    let rem = num - 0;
    
    // Create empty array to store directions and lengths
    let route = [];

    // if dist rem < 0.5 pick direction and go that far
    if (rem < 0.5) {
        way()
    }

    // if dist rem > 0.5 pick random distance between 0 and rem 

    // join array to form output of directions
}


// Output builder