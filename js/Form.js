class Form {

  constructor() {
    this.welcomebg = "images/bg.jpg";
    this.welcome = createImg(this.welcomebg);
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.welcome.hide();
  }

  display(){
    

    this.input.position(displayWidth/2, displayHeight/2 -30);
    this.button.position(displayWidth/2, displayHeight/2 +50);
    this.welcome.position(0,0,displayWidth,displayHeight);
    this.reset.position(displayWidth-200,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name + "!")
      this.greeting.position(displayWidth/2, displayHeight/2);
    });


    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      var playerInfoRef = database.ref('players');
      playerInfoRef.remove();
      Player.updateCarsAtEnd(0);
    })
  }
}
