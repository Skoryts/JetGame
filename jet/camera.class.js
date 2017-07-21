export default class Camera{
  constructor(ctx){
    this.ctx = ctx;
  }
  //check which object will be rendered
  checkCoord(){

  }
  //go through all objects and force render()
  render(objects){
    objects.forEach((obj) => obj.render(this.ctx));
  }
}