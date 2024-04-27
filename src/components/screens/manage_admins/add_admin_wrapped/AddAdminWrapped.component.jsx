import "./AddAdminWrapped.style.sass"
import AddLoginField from "./add_login_field";
import AddPasswordField from "./add_password_field";
import GeneratePasswordDiv from "./generate_password_div";
import AddAccountDiv from "./add_account_div";

const AddAdminWrapped = (props) => {
    if (props.displayAddAccount) {
        return (
            <div className="AddAdminWrapped">
                <AddLoginField/>
                <AddPasswordField/>
                <GeneratePasswordDiv/>
                <AddAccountDiv/>
            </div>
        )
    }
}

export default AddAdminWrapped;