let scl = 40;
let bxs = [];

function setup() {
	createCanvas(800, 800);
	for (let i = 0; i < width / scl + 1; i++){
		for (let j = 0; j < height / scl + 1; j++){
			bxs.push(new Bx(i * scl, j * scl))
		}
	}

}

function draw() {
	background(0)

	for(let i = 0; i < bxs.length; i++){
		bxs[i].display()
	}
	noLoop()
}

class Bx {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	display() {
		stroke(255);
		strokeWeight(1);

		let dir = floor(random(100));
		if (dir < 49){
			line(this.x, this.y, this.x + scl, this.y + scl)
		} else {
			line(this.x + scl, this.y, this.x, this.y + scl)
		}

	}


}
