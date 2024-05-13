import "./AddAdminWrapped.style.sass"
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {AddLoginField} from "./AddLoginField/AddLoginField.component";
import {AddPasswordField} from "./AddPasswordField/AddPasswordField.component";
import {GeneratePasswordDiv} from "./GeneratePasswordDiv/GeneratePasswordDiv.component";
import {AddAccountDiv} from "./AddAccountDiv/AddAccountDiv.component";

export const AddAdminWrapped = () => {
    const isShown = useSelector((state) => state.displayAddAccount.value);

    if (isShown) {
        return (
            <motion.div
                className="AddAdminWrapped"
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <AddLoginField/>
                <AddPasswordField/>
                <GeneratePasswordDiv/>
                <AddAccountDiv/>
            </motion.div>
        )
    }
}
