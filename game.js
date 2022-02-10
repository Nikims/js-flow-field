noise.seed(Math.random());
kekX = 0;
kekY = 0;
kekZ = 0;
res = 6;
field = [];
freq = 20;
for (i = 0; i < 40; i++) {
  field[i] = [];
  for (j = 0; j < 40; j++) {
    field[i][j] = noise.perlin2(i / freq, j / freq) * Math.PI * 1.4;
  }
}
particles = [];
class particle {
  color = `hsla(${Math.round(Math.random() * 360)},100%,50%,7%)`;
  x = 0;
  y = 0;
  constructor(x, y) {
    // console.log(this.color);
    this.x = x;
    this.y = y;
  }
  drawSelf() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 5, 5);
    if (this.x > 0 && this.x < 600 && this.y > 0 && this.y < 600) {
      try {
        this.x += Math.cos(
          field[Math.floor(this.x / 15)][Math.floor(this.y / 15)]
        );
        this.y += Math.sin(
          field[Math.floor(this.x / 15)][Math.floor(this.y / 15)]
        );
      } catch (e) {}
    } else {
      this.x = Math.random() * 600;
      this.y = Math.random() * 600;
    }
  }
}
for (i = 0; i < 100; i++) {
  particles.push(new particle(Math.random() * 600, Math.random() * 600));
}
function update() {}
function draw() {
  for (i = 0; i < particles.length; i++) {
    particles[i].drawSelf();
  }
  // for (i = 0; i < field.length; i++) {
  //   for (j = 0; j < field[i].length; j++) {
  //     drawLine(
  //       (i * 600) / 40,
  //       (j * 600) / 40,
  //       (i * 600) / 40 + 10 * Math.cos(field[i][j]),
  //       (j * 600) / 40 + 10 * Math.sin(field[i][j])
  //     );
  //   }
  // }
}
