import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {UpdateStatusForOrder} from "./_functions/UpdateStatusForOrder";

export const OrderTableStatusSelector = (props) => {
    const dispatch = useDispatch();
    const sourceType = useSelector((state) => state.selectedBase.value);

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Изменить статус</InputLabel>
            <Select
                value={props.selectValue}
                label="Изменить статус"
                onChange={(event) => UpdateStatusForOrder(event, props.id, props.changeSelectValue, dispatch, sourceType)}
            >
                <MenuItem value="БЕЗ ВНИМАНИЯ">БЕЗ ВНИМАНИЯ</MenuItem>
                <MenuItem value="ОЖИДАЕТ ОТВЕТА">ОЖИДАЕТ ОТВЕТА</MenuItem>
                <MenuItem value="ОБРАБОТАН">ОБРАБОТАН</MenuItem>
                <MenuItem value="ЗАВЕРШЕН">ЗАВЕРШЕН</MenuItem>
            </Select>
        </FormControl>
    )
}
