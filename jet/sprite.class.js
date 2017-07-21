const spriteRegister = new Map();

export default class Sprite{

  static get(name){
    return spriteRegister.get(name)
  }

  static add(name, src){
    let sprite = new Image();
    sprite.src = src;
    spriteRegister.set(name, sprite);
  }
}