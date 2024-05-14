import {Button, TextField} from "@mui/material";
import "./auth.style.sass";
import LoginIcon from '@mui/icons-material/Login';
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {setLoginField} from "../redux/separatedBases/LoginAndPassword/Login";
import {setPasswordField} from "../redux/separatedBases/LoginAndPassword/Password";
import {HandleLoginAttempt} from "./functions/HandleLoginAttempt";
import {DisplayAlert} from "./functions/DisplayAlert";
import {RemoveAlert} from "./functions/RemoveAlert";

export const Auth = () => {
    const login = useSelector((state) => state.login.value);
    const password = useSelector((state) => state.password.value);
    const alert = useSelector((state) => state.alert.value);

    const dispatch = useDispatch();

    // Remove alert in 5 secs after it was displayed
    RemoveAlert(alert, dispatch);

    return (
        <motion.div
            className='auth-container'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {DisplayAlert(alert)}
            <TextField
                sx={{gridColumn : "7 / 15", gridRow : "3 / 4"}}
                label="Логин"
                variant="outlined"
                onChange={(event) => dispatch(setLoginField(event.target.value))}
            />
            <TextField
                sx={{gridColumn : "7 / 15", gridRow : "5 / 6"}}
                label="Пароль" type="password"
                autoComplete="current-password"
                onChange={(event) => dispatch(setPasswordField(event.target.value))}
            />
            <Button
                sx={{gridColumn : "7 / 15", gridRow : "7 / 8"}}
                variant="contained"
                endIcon={<LoginIcon/>}
                onClick={() => HandleLoginAttempt(login, password, dispatch)}
            >
                Войти
            </Button>
        </motion.div>
    )
}
