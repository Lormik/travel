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
// Each break must be at least 1km
// The final break can be less that 1km
// 3 Directions that can be taken left, right, forward

const options = ['left', 'right', 'forward'];

//input is the distance to travel
const directions = (num) => {
    
}


// Output builder