import "./FoldUnwrapAdminDiv.style.sass";
import React from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {useSelector} from "react-redux";
import {
    toggleDisplayAddAccount
} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/DisplayAddAccount/DisplayAddAccount";
import {
    TemplateSimpleButton
} from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton/TemplateSimpleButton.component";
export const FoldUnwrapAdminDiv = () => {
    const isShown = useSelector((state) => state.displayAddAccount.value);

    switch (isShown) {
        case true:
            return (
                <div className="FoldUnwrapAdminDiv">
                    <TemplateSimpleButton
                        icon={<KeyboardDoubleArrowUpIcon/>}
                        action={toggleDisplayAddAccount()}
                        text="свернуть"
                    />
                </div>
            )
        default:
            return (
                <div className="FoldUnwrapAdminDiv">
                    <TemplateSimpleButton
                        icon={<KeyboardDoubleArrowDownIcon/>}
                        action={toggleDisplayAddAccount()}
                        text="развернуть"
                    />
                </div>
            )
    }
}
