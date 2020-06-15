import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent {
  @Input() svgId: string;
  @Input() svgClassList: string;
}
