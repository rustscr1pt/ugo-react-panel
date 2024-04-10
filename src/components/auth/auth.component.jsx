import {useEffect, useState} from "react";
import {Alert, Button, TextField} from "@mui/material";
import "./auth.style.sass";
import LoginIcon from '@mui/icons-material/Login';

const Auth = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState([]);

    useEffect(() => {
        setTimeout(function() {
            setShowAlert([]);
        }, 5000)
    }, [showAlert.length])

    function display_alert() {
        if (showAlert.length !== 0) {
            return (
                <Alert
                    sx={{gridColumn : "7 / 15", gridRow : "1 / 2"}}
                    variant="filled"
                    severity={showAlert[0].severity}
                >
                    {showAlert[0].text}
                </Alert>
            )
        }
    }



    function handle_login_attempt() {
        fetch("https://trustedapi.space/api/login/attempt", {
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
                    props.setIsAuthorized(true)
                }
                else {
                    setShowAlert([{
                        condition : true,
                        text : `${json.message}`,
                        severity : "error"
                    }])
                }
            })
            .catch(function(err) {
                setShowAlert([{
                    condition : true,
                    text : `${err}`,
                    severity : "error"
                }])
            })
    }

    return (
        <div className='auth-container'>
            {display_alert()}
            <TextField
                sx={{gridColumn : "7 / 15", gridRow : "3 / 4"}}
                label="Логин"
                variant="outlined"
                onChange={(event) => setLogin(event.target.value)}
            />
            <TextField
                sx={{gridColumn : "7 / 15", gridRow : "5 / 6"}}
                label="Пароль" type="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button
                sx={{gridColumn : "7 / 15", gridRow : "7 / 8"}}
                variant="contained"
                endIcon={<LoginIcon/>}
                onClick={handle_login_attempt}
            >
                Enter
            </Button>
        </div>
    )
}

export default Auth;