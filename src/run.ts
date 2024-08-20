import * as PIXI from 'pixi.js';
import ShapePolygon from './polygon';
import LineTexture from './line-texture';
import PolygonMask from './polygon-mask';

export async function run() {
  let app = new PIXI.Application();
  await app.init({
    width: 800,
    height: 800,
    backgroundAlpha: 0,
  });
  document.querySelector('#app')!.appendChild(app.canvas);

  // Create the graphics object for diagonal lines
  let lines = new PIXI.Graphics();

  // Draw diagonal lines
  for (let i = -800; i <= 1800; i += 20) {
    lines.moveTo(i, 0);
    lines.lineTo(i + 800, 800);
  }

  lines.stroke({
    width: 2,
    color: 0xff0000,
  });

  // Mask the lines with a circle
  let mask = new PIXI.Graphics();
  mask.circle(400, 400, 400);
  mask.fill(0xffffff);
  lines.mask = mask;

  const bunny = new PIXI.Sprite(await PIXI.Assets.load('https://pixijs.com/assets/bunny.png'));
  bunny.width = 281;
  bunny.height = 400;
  bunny.x = 160;
  app.stage.addChild(bunny);
  ShapePolygon.setTexture(app.renderer);
  const shapePolygon = new ShapePolygon(0, 0, 600, 400);
  app.stage.addChild(shapePolygon.getShape());
  // app.stage.addChild(lines);
}
