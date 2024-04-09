import {useEffect, useState} from "react";
import {Alert, Button, TextField} from "@mui/material";
import "./auth.style.sass";
import LoginIcon from '@mui/icons-material/Login';

const Auth = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const delay = ms => new Promise(res => setTimeout(res, ms))
    const [showAlert, setShowAlert] = useState([]);

    useEffect(() => {
        async function wait() {
            await delay(3000);
            setShowAlert([]);
        }
    }, [showAlert.length])

    function display_alert() {
        if (showAlert.length != 0) {
            return (
                <Alert
                    sx={{position : "fixed", top : "30%", width : "38%"}}
                    variant="filled"
                    severity={showAlert.severity}
                >
                    {showAlert.text}
                </Alert>
            )
        }
    }



    function handle_login_attempt() {
        fetch("http://localhost:8000/api/login/attempt", {
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
                sx={{width : "40%"}}
                label="Логин"
                variant="outlined"
                onChange={(event) => setLogin(event.target.value)}
            />
            <TextField
                sx={{marginTop : "2%", width : "40%"}}
                label="Пароль" type="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button
                sx={{marginTop : "2%", width : "40%"}}
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