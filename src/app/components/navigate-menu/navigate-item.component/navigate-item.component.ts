import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigateItemModel } from "./navigate-item.model";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { LottiConfigModel } from "../../../models/lotti-config.model";
import { IconsConstants } from "../../../constants/icons.constants";
import { LottiConstants } from "../../../constants/lotti.constants";

@Component({
  selector: 'app-navigate-item',
  templateUrl: './navigate-item.component.html',
  styleUrls: ['./navigate-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('shakeItem', [
      state('shake-start', style({
        transform: 'scale(1)',
        pointerEvents: 'none',
      })),
      state('shake-end', style({
        transform: 'scale(1)',
        pointerEvents: 'auto',
      })),
      transition(
        'shake-start => shake-end',
        animate('500ms ease-in',
          keyframes([
            style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
            style({transform: 'translate3d(1px, 0, 0)', offset: 0.2}),
            style({transform: 'translate3d(-1px, 0, 0)', offset: 0.3}),
            style({transform: 'translate3d(1px, 0, 0)', offset: 0.4}),
            style({transform: 'translate3d(-1px, 0, 0)', offset: 0.5}),
            style({transform: 'translate3d(1px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(-1px, 0, 0)', offset: 0.7}),
            style({transform: 'translate3d(1px, 0, 0)', offset: 0.8}),
            style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
          ]))),
    ]),
  ]
})
export class NavigateItemComponent {
  @Input() navigateItem: NavigateItemModel;

  private iconAnimation: any;
  state: string;
  activeIndicator = '_active';

  get lottieConfig(): any {
    return new LottiConfigModel(
      `../../assets/animated-icons/icons8/${this.navigateItem.icon}`,
      LottiConstants.Renderer.SVG,
      true,
      false,
    );
  }

  onNavItemClick(event: Event): void {
    this.shake(event);
    this.playIconAnimation();
  }

  shake(event: Event): void {
    const element = event.currentTarget as HTMLElement;

    if (!element.classList.contains(this.activeIndicator)) {
      this.state = 'shake-start';
    }
  }

  shakeEnd(): void {
    this.state = 'shake-end';
  }

  handleIconAnimation(animation: any) {
    this.iconAnimation = animation;
  }

  playIconAnimation() {
    this.iconAnimation.stop();
    this.iconAnimation.play();
  }
}
