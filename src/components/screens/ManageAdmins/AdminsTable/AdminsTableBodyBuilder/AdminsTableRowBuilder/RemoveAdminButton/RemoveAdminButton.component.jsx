import BackspaceIcon from '@mui/icons-material/Backspace';
import IconButton from "@mui/material/IconButton";
import route_fillers from "../../../../../../../constants&addons/route_fillers";

const RemoveAdminButton = (props) => {
    function remove_admin_account() {
        fetch(`${route_fillers.url}/api/admins/remove`, {
            method : "POST",
            body : JSON.stringify({
                id : `${props.id}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    props.setReloadActivator((previous) => !previous);
                }
                else {
                    console.log(json.message);
                }
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    return (
        <IconButton
            color="primary"
            aria-label="Удалить аккаунт администратора"
            onClick={remove_admin_account}
        >
            <BackspaceIcon/>
        </IconButton>
    )
}
export default RemoveAdminButton;