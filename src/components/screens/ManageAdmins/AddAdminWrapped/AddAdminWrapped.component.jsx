import "./AddAdminWrapped.style.sass"
import AddLoginField from "./AddLoginField";
import AddPasswordField from "./AddPasswordField";
import GeneratePasswordDiv from "./GeneratePasswordDiv";
import AddAccountDiv from "./AddAccountDiv";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const AddAdminWrapped = () => {
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

export default AddAdminWrapped;
