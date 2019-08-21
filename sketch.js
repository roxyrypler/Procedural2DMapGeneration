//dfsd

let cW = window.innerWidth;
let cH = window.innerHeight;

let tileSize = 40;
let noiseScale = 0.02;

function setup() {
    createCanvas(cW, cH);
    background(0);
    createTileGrid();
    
}

function draw() {


}

function createTileGrid() {
    for (var x = 0; x < width; x += width / tileSize) {
        for (var y = 0; y < height; y += height / tileSize) {
            fill(calculateNoise(x, y) * 255);
            rect(x, y, width / tileSize, height / tileSize);
            console.log(calculateNoise(x, y) * 255);
        }
    }
}

function calculateNoise(x, y) {
    noiseDetail(8, 0.65);
    let noises = noise(x * noiseScale, y * noiseScale);
    return noises;
}
