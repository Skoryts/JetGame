import Camera from "../jet/camera.class";

export default class Jet {
  constructor(elem, x, y){
    this.canvas = document.getElementById(elem);
    this.canvas.width = x;
    this.canvas.height = y;
    this.ctx = this.canvas.getContext("2d");
    this.camera = new Camera();
    this.scenes = new Map();
  }

  start(){
    this.loop = setInterval(() => this.update(), 20);
  }

  update(){
    this.currentScene.update();
  }

  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loadScene(name){
    let Scene = this.scenes.get(name);
    this.currentScene = new Scene();
  }
}