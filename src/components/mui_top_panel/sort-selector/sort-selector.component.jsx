import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SortSelector = () => {
    return (
        <FormControl sx={{width : "40%"}}>
            <InputLabel id="demo-simple-select-label">Где искать</InputLabel>
            <Select
                label="Где искать"
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