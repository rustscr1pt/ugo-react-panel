import CachedIcon from '@mui/icons-material/Cached';
import {Button} from "@mui/material";

const RefreshButton = (props) => {

    function refresh_data() {
        fetch("http://localhost:8000/api/orders/get", {
            method : "POST",
            body : JSON.stringify({
                token_id : "nil"
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then(
                (response) => response.json())
            .then((json) => {
                console.log(json);
                props.setOrdersVector(json.reply)
            })
            .catch(
                function(err){
                    console.log(err)
                }
            )
    }

    return (
        <Button
            sx={{gridColumn : "35 / 40"}}
            variant="contained"
            endIcon={<CachedIcon/>}
            onClick={refresh_data}
        >
            Обновить
        </Button>
    )
}

export default RefreshButton;