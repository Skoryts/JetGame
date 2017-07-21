import Scene from "../../jet/scene.class";
import Iso from "../../jet/iso.class";
import Tile from "../../jet/tile.class";
import Sprite from "../../jet/sprite.class";
import {tileSize} from "../../app/config";

export default class MainScene extends Scene {
  start(){
    this.objects = new Set();
    this.level = [
      [1,1,1,1,1,1],
      [1,0,0,0,0,1],
      [1,0,1,0,0,1],
      [1,0,0,0,0,1],
      [1,0,0,0,0,1],
      [1,1,1,1,1,1]
    ]
    Sprite.add("wall", "./app/assets/block.png");
    Sprite.add("grass", "./app/assets/floor.png");
    let coordIso;
    const differenceHeights = 98 - 53; //heights of sprites, later must be in preload section
    
    for (let i = 0; i < this.level.length; i++){
      for (let j = 0; j < this.level[0].length; j++){
        coordIso = Iso.toIso(i*tileSize, j*tileSize);
        if (this.level[i][j] === 1){
          this.objects.add(new Tile(
            coordIso.x+250, coordIso.y-differenceHeights, "wall"
          ));
        } else{
          this.objects.add(new Tile(
            coordIso.x+250, coordIso.y, "grass" 
          ));
        }
        
      }
    }
  }

  update(){
  }
}