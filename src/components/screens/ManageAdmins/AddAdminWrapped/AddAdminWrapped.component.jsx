import "./AddAdminWrapped.style.sass"
import AddLoginField from "./AddLoginField";
import AddPasswordField from "./AddPasswordField";
import GeneratePasswordDiv from "./GeneratePasswordDiv";
import AddAccountDiv from "./AddAccountDiv";
import {useState} from "react";
import {motion} from "framer-motion";

const AddAdminWrapped = (props) => {
    const [newUser, setNewUser] = useState("");
    const [newPassword, setNewPassword] = useState("");

    if (props.displayAddAccount) {
        return (
            <motion.div
                className="AddAdminWrapped"
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
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
                    setNewUser={setNewUser}
                    newPassword={newPassword}
                    setNewPassword={setNewPassword}
                    setReloadActivator={props.setReloadActivator}
                />
            </motion.div>
        )
    }
}

export default AddAdminWrapped;
