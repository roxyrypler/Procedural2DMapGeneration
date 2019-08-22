//dfsd

let cW = window.innerWidth;
let cH = window.innerHeight;

let tileSize = 300;
let noiseScale = 0.009;

let water = "#4bcffa";
let sand = "#ffdd59";
let ground = "#485460";

function setup() {
	createCanvas(cW, cH);
	background(0);
	createTileGrid();

}

function draw() {


}

function createTileGrid() {
	for (var x = 0; x < width; x += width / tileSize * 0.9) {
		for (var y = 0; y < height; y += height / tileSize * 0.9) {
			let tileChooser = calculateNoise(x, y);
			if (tileChooser <= 0.4) {
				fill(water);
			} else if (tileChooser <= 0.6) {
				fill(sand);
			} else if (tileChooser <= 0.7) {
				fill(ground);
			}
			noStroke();
			rect(x, y, width / tileSize, height / tileSize);
			console.log("Count");
		}
	}
}

function calculateNoise(x, y) {
	noiseDetail(8, 0.5);
	let noises = noise(x * noiseScale, y * noiseScale);
	return noises;
}
