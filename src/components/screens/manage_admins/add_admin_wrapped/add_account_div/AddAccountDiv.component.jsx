import "./AddAccountDiv.style.sass"
import CreateIcon from '@mui/icons-material/Create';
import TemplateSimpleButton from "../unified_components/generate_pass_add_button";
import route_fillers from "../../../../../constants&addons/route_fillers";
const AddAccountDiv = (props) => {

    function clear_textfield_after() {
        props.setNewUser("");
        props.setNewPassword("");
    }

    function add_account_to_base() {
        fetch(`${route_fillers.url}/api/admins/add`, {
            method : "POST",
            body : JSON.stringify({
                login : `${props.newUser}`,
                password : `${props.newPassword}`,
                token : `${sessionStorage.getItem("ugo-token")}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (!json.is_succeed && json.message === "expired token") {
                    console.log("Your token has expired");
                }
                else if (!json.is_succeed) {
                    console.log(json.message);
                }
                else {
                    clear_textfield_after();
                    props.setReloadActivator((previous) => !previous)
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    return (
        <div className="AddAccountDiv">
            <TemplateSimpleButton
                icon={<CreateIcon/>}
                action={add_account_to_base}
                text="добавить"
            />
        </div>
    )
}
export default AddAccountDiv;