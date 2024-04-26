import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SortSelector = (props) => {
    return (
        <FormControl sx={{
            gridColumn : " 28 / 34",
            gridRow : "2 / 2",
            backgroundColor : "white"
        }}>
            <InputLabel id="demo-simple-select-label">Где искать</InputLabel>
            <Select
                value={props.filterType}
                label="Где искать"
                onChange={(event) => props.setFilterType(event.target.value)}
            >
                <MenuItem value="id">ID</MenuItem>
                <MenuItem value="request_status">Статус</MenuItem>
                <MenuItem value="customer_name">Имя</MenuItem>
                <MenuItem value="customer_email">Почта</MenuItem>
                <MenuItem value="customer_self_description">Описание</MenuItem>
                <MenuItem value="date_time_added">Дата</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SortSelector;