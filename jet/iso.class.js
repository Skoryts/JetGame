export default class Iso {
  static toIso(x, y){
    return {
      x: x - y,
      y: (x + y) / 2
    }
  }
  static fromIso(x, y){
    return {
      x: (2 * y + x) / 2,
      y: (2 * y - x) / 2
    }
  }
}