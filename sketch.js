
let img;
let slice_window = 50;
let sliced_img = [];
let choice_filter = 'GRAY';

// Load the image.
function preload() {
    img = loadImage('assets/test.jpeg');
}

function getSpecificIndex(x, y, img) {
    return x + y * img.width;
}

function setup() {

    createCanvas(img.width-30, img.height-20);
    background(255);
    // Display the image.
    // image(img, 0, 0);
    filter(GRAY);
    console.log(img.width, img.height);
    console.log(width, height);

    for (let x = 0; x < img.width - slice_window; x += slice_window) {
        for (let y = 0; y < img.height - slice_window; y += slice_window) {
            let eachSlice = img.get(x, y, slice_window, slice_window);
            // console.log(x,y)
            sliced_img.push(eachSlice);
        }
    }

    // create the grid
    for (var x = 0; x < img.width; x += slice_window) {
        for (var y = 0; y < img.height; y += slice_window) {
            stroke(0);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

}

function removeImagePortion(index){
    sliced_img.splice(sliced_img[index],1);
}

function mousePressed() {
    if(sliced_img.length > 0){
        let getRandomPortion = floor(random(0, sliced_img.length));
        image(sliced_img[getRandomPortion], mouseX-2, mouseY-2);
        removeImagePortion(getRandomPortion);
    }
    
    


    if (choice_filter == 'GRAY'){
        filter(GRAY);
    }
    if(choice_filter == 'THRESHOLD'){
        filter(THRESHOLD);
    }
}


function keyTyped() {

    if (key === 's' || key === 'S') {
        for (var x = 0; x < img.width; x += slice_window) {
            for (var y = 0; y < img.height; y += slice_window) {
                stroke(255);
                strokeWeight(1);
                line(x, 0, x, height);
                line(0, y, width, y);
            }
        }
        saveCanvas('myCanvas', 'jpg');
        print("saving image");
    }
    return false;
}

function draw() {
    
    // ellipse(50, 50, 80, 80);
}