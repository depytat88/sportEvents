import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigateItemModel } from "./navigate-item.component/navigate-item.model";
import { NavListConstants } from "../../constants/nav-list";

@Component({
  selector: 'app-navigate-menu',
  templateUrl: './navigate-menu.component.html',
  styleUrls: ['./navigate-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateMenuComponent {
  navigateItems: NavigateItemModel[] = NavListConstants.NavList;
}
