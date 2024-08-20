import * as PIXI from 'pixi.js';
import Shape from './shape';
import LineTexture from './line-texture';

export default class ShapePolygon extends Shape {
  constructor(x: number, y: number, width: number, height: number) {
    super();
    const r = 100;
    this.polygon = new PIXI.Graphics()
      .rect(x, y, width, height).fill({ color: 0xffffff, alpha: 0, })
      .rect(x, y, width, height)
      .fill(ShapePolygon.texture)
      .circle(width / 2, height / 2, r).cut().circle(width / 2, height / 2, r).stroke({ width: 2, color: 0xff0000 })
  }

  static setTexture(renderer: PIXI.Renderer) {
    const textureWidth = 800;
    const textureHeight = 800;
    const lineTexture = new LineTexture(textureWidth, textureHeight, renderer);
    const texture = lineTexture.getLineTexture();
    const matrix = new PIXI.Matrix();
    matrix.scale(1, 1);
    matrix.translate(-textureWidth, -textureHeight);
    this.texture = { texture, matrix, };
  }

  getShape(): PIXI.Graphics {
    return this.polygon;
  }

  static texture: PIXI.FillStyle;

  private polygon: PIXI.Graphics;
}