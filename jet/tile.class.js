import GameObject from "../jet/gameobject.class";
import Sprite from "../jet/sprite.class";
import {tileSize} from "../app/config";

export default class Tile extends GameObject{
  constructor(x, y, spriteSrc, width, height){
    super(x, y, width, height);
    this.tileSize = tileSize;
    this.image = Sprite.get(spriteSrc);
  }

  render(ctx){
    ctx.drawImage(
      this.image,
      this.x,
      this.y + tileSize
    );
  }
}