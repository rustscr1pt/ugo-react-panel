import "./ChangeToOrdersScreenDiv.style.sass"
import TemplateSimpleButton from "../../add_admin_wrapped/unified_components/generate_pass_add_button";
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PagePosition from "../../../../../constants&addons/screen_enums.ts";
const ChangeToOrdersScreenDiv = (props) => {
    function change_screen() {
        props.setPagePosition(PagePosition.Discover);
    }

    return (
        <div className="ChangeToOrdersScreenDiv">
            <TemplateSimpleButton
                icon={<BorderAllIcon/>}
                action={change_screen}
                text="Заказы"
            />
        </div>
    )
}
export default ChangeToOrdersScreenDiv;