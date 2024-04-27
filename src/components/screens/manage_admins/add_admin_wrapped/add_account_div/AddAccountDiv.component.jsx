import "./AddAccountDiv.style.sass"
import CreateIcon from '@mui/icons-material/Create';
import GeneratePassAddButton from "../unified_components/generate_pass_add_button";
const AddAccountDiv = () => {
    function add_account_to_base() {

    }

    return (
        <div className="AddAccountDiv">
            <GeneratePassAddButton
                icon={<CreateIcon/>}
                action={add_account_to_base}
                text="добавить"
            />
        </div>
    )
}
export default AddAccountDiv;