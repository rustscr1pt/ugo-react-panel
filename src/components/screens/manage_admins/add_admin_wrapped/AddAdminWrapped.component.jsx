import "./AddAdminWrapped.style.sass"
import AddLoginField from "./add_login_field";
import AddPasswordField from "./add_password_field";

const AddAdminWrapped = (props) => {
    if (props.displayAddAccount) {
        return (
            <div className="AddAdminWrapped">
                <AddLoginField/>
                <AddPasswordField/>
            </div>
        )
    }
}

export default AddAdminWrapped;