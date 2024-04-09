import {useState} from "react";
import {Button, TextField} from "@mui/material";
import "./auth.style.sass";
import LoginIcon from '@mui/icons-material/Login';

const Auth = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function handle_login_attempt() {
        fetch("")
    }

    return (
        <div className='auth-container'>
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
                onClick={}
            >
                Enter
            </Button>
        </div>
    )
}

export default Auth;