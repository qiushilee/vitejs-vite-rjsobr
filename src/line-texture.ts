import * as PIXI from 'pixi.js';

export default class LineTexture {
  constructor(width: number, height: number, renderer: PIXI.Renderer) {
    this.lineGraphics = new PIXI.Graphics();
    for (let i = -800; i <= 1800; i += 20) {
      this.lineGraphics.moveTo(i, 0);
      this.lineGraphics.lineTo(i + width, height);
    }
  
    this.lineGraphics.stroke({
      width: 2,
      color: 0xff0000,
    });

    this.lineTexture = PIXI.Texture.from(renderer.extract.canvas(this.lineGraphics));
  }

  getLineTexture(): PIXI.Texture {
    return this.lineTexture;
  }

  getLineGraphics(): PIXI.Graphics {
    return this.lineGraphics;
  }

  private lineGraphics: PIXI.Graphics = new PIXI.Graphics();

  private lineTexture: PIXI.Texture = new PIXI.Texture();
}