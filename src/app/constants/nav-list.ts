import { NavigateItemModel } from "../components/navigate-menu/navigate-item.component/navigate-item.model";
import { IconsConstants } from "./icons.constants";
import { StatesConstants } from "./states.constants";

export class NavListConstants {
  static readonly NavList = [
    new NavigateItemModel(
      IconsConstants.ANIMATED_ICONS.HOME,
      StatesConstants.HOME.TITLE,
      StatesConstants.HOME.LINK,
    ),
    new NavigateItemModel(
      IconsConstants.ANIMATED_ICONS.NEWS,
      StatesConstants.NEWS.TITLE,
      StatesConstants.NEWS.LINK,
    ),
    new NavigateItemModel(
      IconsConstants.ANIMATED_ICONS.SETTINGS,
      StatesConstants.PROFILE.TITLE,
      StatesConstants.PROFILE.LINK,
    ),
  ];
}
