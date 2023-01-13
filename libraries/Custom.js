// TODO: Make star class!

class Building {
  static random(width, groundLocation, maxRows, maxCols) {
    return new Building(
      Math.random() * width,
      groundLocation,
      1 + Math.ceil(Math.random() * (maxCols - 1)),
      1 + Math.ceil(Math.random() * (maxRows - 1))
    );
  }

  constructor(x, y, colCount, rowCount) {
    this.windowSize = 10;
    this.doorSize = 20;

    this.colCount = colCount;
    this.rowCount = rowCount;

    this.color = Math.floor(50 + Math.random() * 100);

    this.windowLitChance = 0.65;

    this.width = (2 * colCount + 1) * this.windowSize;
    this.height = (2 * rowCount + 1) * this.windowSize + this.doorSize * 1.5;

    this.pos = createVector(x, y - this.height);
  }

  /* == Window Helpers == */
  makeWindow() {
    translate(this.windowSize, 0);
    fill(Math.random() < this.windowLitChance ? "yellow" : "white");
    rect(0, 0, this.windowSize, this.windowSize);
    translate(this.windowSize, 0);
  }

  makeRow() {
    translate(0, this.windowSize);

    Array(this.colCount)
      .fill()
      .forEach(() => {
        this.makeWindow();
      });

    translate(-2 * this.colCount * this.windowSize, 0);

    translate(0, this.windowSize);
  }

  building() {
    push();
    stroke("black");
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    pop();
  }

  windows() {
    push();
    fill("white");
    translate(this.pos);

    Array(this.rowCount)
      .fill()
      .map(() => this.makeRow());
    pop();
  }

  door() {
    push();
    translate(this.pos);
    translate(this.width / 2, this.height);
    translate(-this.doorSize / 2, 0);

    fill(60);
    stroke("black");
    rect(0, 0, this.doorSize, -this.doorSize);
    translate(this.doorSize / 2, 0);
    line(0, 0, 0, -this.doorSize);
    pop();
  }

  draw() {
    push();
    this.building();
    this.windows();
    this.door();

    pop();
  }
}
