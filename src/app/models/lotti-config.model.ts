import { LottiConstants } from "../constants/lotti.constants";

export class LottiConfigModel {
  constructor(
    readonly path:  string,
    readonly renderer: string = LottiConstants.Renderer.SVG,
    readonly autoplay = true,
    readonly loop = true,
  ) {}
}
