import Scene from "../../jet/scene.class";
import Iso from "../../jet/iso.class";

export default class MainScene extends Scene {
  start(){
    this.level = [
      [1,1,1,1,1,1],
      [1,0,0,0,0,1],
      [1,0,1,0,0,1],
      [1,0,0,0,0,1],
      [1,0,0,0,0,1],
      [1,1,1,1,1,1]
    ]
  }

  update(){
    for (let i = 0; i < this.level.length; i++){
      for (let j = 0; j < this.level[0].length; j++){
        let tileType = this.level[i][j];
        this.renderTile(tileType, j, i);
      }
    }
  }

  renderTile(tileType, x, y){
    let tileWidth = 50,
      wallGraphicHeight = 98,
      floorGraphicWidth = 103,
      floorGraphicHeight = 53,
      wallHeight = wallGraphicHeight - floorGraphicHeight;
    let tile = new Image();
    tile.src = tileType > 0 ? "./app/assets/block.png" : "./app/assets/floor.png";
    let tileCoord = Iso.toIso(x*tileWidth, y*tileWidth);
    if (tileType === 1){
      this.ctx.drawImage(tile, tileCoord.x+250, tileCoord.y+50-wallHeight, floorGraphicWidth, wallGraphicHeight);
    } else{
      this.ctx.drawImage(tile, tileCoord.x+250, tileCoord.y+50, floorGraphicWidth, floorGraphicHeight);
    }
    
  }
}