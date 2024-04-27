import GeneratePassAddButton from "../unified_components/generate_pass_add_button";
import PatternIcon from '@mui/icons-material/Pattern';
import "./GeneratePasswordDiv.style.sass";

const GeneratePasswordDiv = () => {
    function generate_password() {}

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