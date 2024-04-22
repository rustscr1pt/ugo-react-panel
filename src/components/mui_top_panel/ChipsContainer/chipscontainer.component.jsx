import {Chip} from "@mui/material";

const ChipsContainer = (props) => {
    if (props.filterCondition) {
        return (
            <div className="chips-container-flex">
                <Chip sx={{width : "40%"}} label="Все заказы" variant="outlined"/>
                <Chip sx={{width : "40%"}} label="Фильтрация"/>
            </div>
        )
    }
    else {
        return (
            <div className="chips-container-flex">
                <Chip sx={{width : "40%"}} label="Все заказы"/>
                <Chip sx={{width : "40%"}} label="Фильтрация" variant="outlined"/>
            </div>
        )
    }
}
export default ChipsContainer;