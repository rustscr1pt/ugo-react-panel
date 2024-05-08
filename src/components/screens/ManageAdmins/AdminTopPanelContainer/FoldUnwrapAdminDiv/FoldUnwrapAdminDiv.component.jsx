import "./FoldUnwrapAdminDiv.style.sass";
import React from "react";
import TemplateSimpleButton from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const FoldUnwrapAdminDiv = (props) => {
    function change_property() {
        props.setDisplayAddAccount((prev) => !prev);
    }

    switch (props.displayAddAccount) {
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