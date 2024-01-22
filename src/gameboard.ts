class GameBoard {
  private clouds: Clouds;
  private entities: GameEntity[];
  //private backgroundIndex: number; // todo: change index to the actual image
  private backgroundImage: p5.Image;

  constructor(entities: GameEntity[], backgroundImage: p5.Image) {
    this.clouds = new Clouds();
    this.entities = entities;
    //this.backgroundIndex = backgroundIndex;
    this.backgroundImage = backgroundImage;
  }



  public setupGameBackground() {
    createCanvas(windowWidth, windowHeight);
  }

  public drawGameBackground() {
    image(this.backgroundImage, 0, 0, width, height);
  }

  /*private checkCollision(){
    //Här vill vi ha en funktioooooon!!!

  }*/



  public update() {
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }
  }

  public draw() {
    this.drawGameBackground();
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
    }
    this.clouds.draw();
  }
}
