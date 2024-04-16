import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SortSelector = (props) => {
    return (
        <FormControl sx={{
            gridColumn : " 28 / 34",
            backgroundColor : "white"
        }}>
            <InputLabel id="demo-simple-select-label">Где искать</InputLabel>
            <Select
                value={props.filterType}
                label="Где искать"
                onChange={(event) => props.setFilterType(event.target.value)}
            >
                <MenuItem value="ID">ID</MenuItem>
                <MenuItem value="Статус">Статус</MenuItem>
                <MenuItem value="Имя">Имя</MenuItem>
                <MenuItem value="Почта">Почта</MenuItem>
                <MenuItem value="Описание">Описание</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SortSelector;