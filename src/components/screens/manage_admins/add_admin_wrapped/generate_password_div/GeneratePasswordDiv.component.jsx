import GeneratePassAddButton from "../unified_components/generate_pass_add_button";
import PatternIcon from '@mui/icons-material/Pattern';
import "./GeneratePasswordDiv.style.sass";
import {generate} from "../../../../../wasm/pkg/ugo_react_wasm";

const GeneratePasswordDiv = (props) => {
    function generate_password() {
        props.setNewPassword(generate(15, false, false))
    }

    return (
        <div className="GeneratePasswordDiv">
            <GeneratePassAddButton
                icon={<PatternIcon/>}
                action={generate_password}
                text="сгенерировать"
            />
        </div>
    )
}
export default GeneratePasswordDiv;