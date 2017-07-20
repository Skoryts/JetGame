import Jet from "../jet/jet.class";
import MainScene from "../app/scenes/main.scene";

class App{
  constructor(){
    this.main();
  }
  main(){
    const Game = new Jet("Jet", 500, 300);
    Game.loadScene(MainScene);
  }
}

new App();