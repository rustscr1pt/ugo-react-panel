import "./AddAdminWrapped.style.sass"
import AddLoginField from "./add_login_field";
import AddPasswordField from "./add_password_field";
import GeneratePasswordDiv from "./generate_password_div";
import AddAccountDiv from "./add_account_div";
import {useState} from "react";

const AddAdminWrapped = (props) => {
    const [newUser, setNewUser] = useState("");
    const [newPassword, setNewPassword] = useState("");

    if (props.displayAddAccount) {
        return (
            <div className="AddAdminWrapped">
                <AddLoginField
                    newUser={newUser}
                    setNewUser={setNewUser}
                />
                <AddPasswordField
                    newPassword={newPassword}
                    setNewPassword={setNewPassword}
                />
                <GeneratePasswordDiv
                    setNewPassword={setNewPassword}
                />
                <AddAccountDiv
                    newUser={newUser}
                    newPassword={newPassword}
                    setReloadActivator={props.setReloadActivator}
                />
            </div>
        )
    }
}

export default AddAdminWrapped;