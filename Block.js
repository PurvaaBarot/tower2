class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png");
      this.visiblity=255;
    }
    display(){
      if(this.body.speed<5){
      var pos= this.body.position;
      rectMode(CENTER);
     // rect(pos.x,pos.y,this.width, this.height);
      image(this.image, this.body.position.x, this.body.position.y, 40, 40);  }
      else{
        World.remove(world, this.body);
      }
    }
}