class Obstacle {
  constructor(ctx, gameWidth, playerPosY0, playerHeight) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.playerPosY0 = playerPosY0;
    this.playerHeight = playerHeight;

    this.width = 40;
    this.height = this.width * 2.5;
    this.posX = gameWidth;
    this.posY = playerPosY0 + playerHeight - this.height;

    //select random bush
    this.randomImage = Math.trunc(Math.random() * (7 - 1) + 1);
    if (
      this.randomImage === 4 ||
      this.randomImage === 5 ||
      this.randomImage === 6
    ) {
      this.width = 80;
      this.height = this.width;
      this.posX = this.gameWidth;
      this.posY = this.playerPosY0 + this.playerHeight - this.height;
    }

    //cactus image
    this.image = new Image();
    this.image.src = `./img/cactus/cactus${this.randomImage}.png`;

    this.velX = 10;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.move();
  }

  move() {
    this.posX -= this.velX;
  }
}
