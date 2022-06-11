class Player {
  constructor(ctx, gameW, gameH, keys, gameRun) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 120;
    this.height = 140;

    this.image = new Image();
    this.image.src = "./img/trex/dinowalk.png";
    this.image.frames = 2;
    this.image.framesIndex = 0;

    //Sounds
    this.jumpSound = document.getElementById("jumpSoundEff");

    //know if game is running or not
    this.gameRunning = gameRun;

    this.posX = 50;
    this.posY = this.gameHeight / 2 - 50;
    this.posY0 = this.posY;

    this.velY = 1;
    this.gravity = 0.4;

    this.keys = keys;

    this.setListeners();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.image.framesIndex * (this.image.width / this.image.frames) - 33,
      0,
      this.image.width / this.image.frames,
      this.image.height / 2 + 10,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.animate(framesCounter);

    this.move();
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }

  move() {
    if (this.posY < this.posY0) {
      // Saltando
      this.posY += this.velY;
      this.velY += this.gravity;
    } else {
      this.posY = this.posY0;
      this.velY = 1;
    }
  }

  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.SPACE:
          if (this.posY >= this.posY0) {
            this.jump();
          }
          break;
      }
    });
  }

  jump() {
    this.posY -= 80;
    this.velY -= 8;
    //we need to work here with the sound bug after game false
    if (this.gameRunning === true) {
      this.jumpSound.play();
    } else if (this.gameRunning === false) {
      this.jumpSound.volume = 0;
      this.jumpSound.stop();
    }
  }
}
