import Camera from "../jet/camera.class";

export default class Jet {
  constructor(elem, x, y){
    this.canvas = document.getElementById(elem);
    this.canvas.width = x;
    this.canvas.height = y;
    this.ctx = this.canvas.getContext("2d");
    this.camera = new Camera(this.ctx);
  }

  start(){
    this.currentScene.start();
    this.loop = setInterval(() => this.update(), 20);
  }

  update(){
    this.clear();
    this.currentScene.update();
    this.camera.render(this.currentScene.objects);
  }

  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loadScene(scene){
    this.currentScene = new scene();
    this.start();
  }
}