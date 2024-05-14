import {useEffect} from "react";
import {Alert, Button, TextField} from "@mui/material";
import "./auth.style.sass";
import LoginIcon from '@mui/icons-material/Login';
import route_fillers from "../../constants&addons/route_fillers";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {emptyAlertActivity, setAlertActivity} from "../redux/separatedBases/AuthAndAlert/Alert";
import {setAuthValue} from "../redux/separatedBases/AuthAndAlert/Auth";
import {setLoginField} from "../redux/separatedBases/LoginAndPassword/Login";
import {setPasswordField} from "../redux/separatedBases/LoginAndPassword/Password";

export const Auth = () => {
    const login = useSelector((state) => state.login.value);
    const password = useSelector((state) => state.password.value);
    const alert = useSelector((state) => state.alert.value);

    const dispatch = useDispatch();

    // Remove alert in 5 secs after it was displayed
    useEffect(() => {
        setTimeout(function() {
            dispatch(emptyAlertActivity());
        }, 5000)
    }, [alert.length]);

    // Add an alert so it could be displayed
    function display_alert() {
        if (alert.length !== 0) {
            return (
                <Alert
                    sx={{gridColumn : "7 / 15", gridRow : "1 / 2"}}
                    variant="filled"
                    severity={alert[0].severity}
                >
                    {alert[0].text}
                </Alert>
            )
        }
    }



    // check if password & login is correct and make a redirect or display an error
    function handle_login_attempt() {
        fetch(`${route_fillers.url}/api/login/attempt`, {
            method : "POST",
            body : JSON.stringify({
                "login" : `${login}`,
                "password" : `${password}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    sessionStorage.setItem("ugo-token", json.message);
                    dispatch(setAuthValue(true));
                }
                else {
                    console.log(json.message);
                    dispatch(setAlertActivity({
                        condition : true,
                        text : `${json.message}`
                    }))
                }
            })
            .catch(function(err) {
                console.log(err);
                dispatch(setAlertActivity({
                    condition : true,
                    text : `${err}`
                }))
            })
    }

    return (
        <motion.div
            className='auth-container'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {display_alert()}
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
                onClick={handle_login_attempt}
            >
                Войти
            </Button>
        </motion.div>
    )
}
