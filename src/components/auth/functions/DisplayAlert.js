import {Alert} from "@mui/material";

// Add an alert so it could be displayed
export function DisplayAlert(alert) {

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