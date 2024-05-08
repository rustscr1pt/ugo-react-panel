import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import route_fillers from "../../../../../../constants&addons/route_fillers";

const OrderTableStatusSelector = (props) => {

    // On change event update the status value in mySQL
    function update_status(event) {
        fetch(`${route_fillers.url}/api/orders/change_status`, {
            method : "POST",
            body : JSON.stringify({
                order_id : `${props.id}`,
                new_status : `${event.target.value}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json.message);
                    props.changeSelectValue(event.target.value);
                    props.reload_orders([]);
                }
                else {
                    console.log(json.message);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
        console.log(event.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Изменить статус</InputLabel>
            <Select
                value={props.selectValue}
                label="Изменить статус"
                onChange={update_status}
            >
                <MenuItem value="БЕЗ ВНИМАНИЯ">БЕЗ ВНИМАНИЯ</MenuItem>
                <MenuItem value="ОЖИДАЕТ ОТВЕТА">ОЖИДАЕТ ОТВЕТА</MenuItem>
                <MenuItem value="ОБРАБОТАН">ОБРАБОТАН</MenuItem>
                <MenuItem value="ЗАВЕРШЕН">ЗАВЕРШЕН</MenuItem>
            </Select>
        </FormControl>
    )
}

export default OrderTableStatusSelector;