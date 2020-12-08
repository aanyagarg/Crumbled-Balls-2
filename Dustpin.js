class  {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("MatterJsBoilerPlate-master/dustbingreen.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body)
    }
}