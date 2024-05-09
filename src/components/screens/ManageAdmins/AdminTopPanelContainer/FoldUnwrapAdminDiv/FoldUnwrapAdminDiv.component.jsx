import "./FoldUnwrapAdminDiv.style.sass";
import React from "react";
import TemplateSimpleButton from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {
    toggleDisplayAddAccount
} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/DisplayAddAccount/DisplayAddAccount";
const FoldUnwrapAdminDiv = () => {
    const dispatch = useDispatch();
    const isShown = useSelector((state) => state.displayAddAccount.value);

    function change_property() {
        dispatch(toggleDisplayAddAccount());
    }

    switch (isShown) {
        case true:
            return (
                <div className="FoldUnwrapAdminDiv">
                    <TemplateSimpleButton
                        icon={<KeyboardDoubleArrowUpIcon/>}
                        action={change_property}
                        text="свернуть"
                    />
                </div>
            )
        default:
            return (
                <div className="FoldUnwrapAdminDiv">
                    <TemplateSimpleButton
                        icon={<KeyboardDoubleArrowDownIcon/>}
                        action={change_property}
                        text="развернуть"
                    />
                </div>
            )
    }
}

export default FoldUnwrapAdminDiv;
