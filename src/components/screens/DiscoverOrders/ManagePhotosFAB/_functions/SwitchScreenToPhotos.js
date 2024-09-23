import {setNewScreenPosition} from "../../../../redux/separatedBases/ScreenPosition/ScreenPosition";
import PagePosition from "../../../../../constants&addons/screen_enums";

export const SwitchScreenToPhotos = (dispatch) => {
    dispatch(setNewScreenPosition(PagePosition.ManageImages))
}