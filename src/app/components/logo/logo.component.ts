import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LottiConfigModel } from "../../models/lotti-config.model";
import { LottiConstants } from "../../constants/lotti.constants";
import { CommonConstants } from "../../constants/common.constants";
import {IconsConstants} from "../../constants/icons.constants";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  private iconAnimation: any;
  commonConstants = CommonConstants;

  get lottieConfig(): any {
    return new LottiConfigModel(
      `../../assets/animated-icons/icons8/${IconsConstants.ANIMATED_ICONS.LOGO}`,
      LottiConstants.Renderer.SVG,
      true,
      false,
      );
  }

  handleAnimation(animation: any) {
    this.iconAnimation = animation;
  }

  playAnimation() {
    this.iconAnimation.stop();
    this.iconAnimation.play();
  }
}
