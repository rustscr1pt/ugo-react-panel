import TemplateSimpleButton from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton";
import PatternIcon from '@mui/icons-material/Pattern';
import "./GeneratePasswordDiv.style.sass";
import {generate} from "../../../../../wasm/pkg";

const GeneratePasswordDiv = (props) => {
    function generate_password() {
        props.setNewPassword(generate(15, false, false))
    }

    return (
        <div className="GeneratePasswordDiv">
            <TemplateSimpleButton
                icon={<PatternIcon/>}
                action={generate_password}
                text="сгенерировать"
            />
        </div>
    )
}
export default GeneratePasswordDiv;
