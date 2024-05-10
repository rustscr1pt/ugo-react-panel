import {Chip} from "@mui/material";
import './SingleChip.style.sass'
import {useSelector} from "react-redux";

const pref_width = "49%";
const blue_back = "#1976d2";
const white_font = "#FFFFFF";

const SingleChip = () => {
    const filterCondition = useSelector((state) => state.ordersFilterCondition.value);

    if (filterCondition) {
        return (
            <div className="chips-container-flex">
                <Chip sx={{width : pref_width}} label="Все заказы" variant="outlined"/>
                <Chip sx={{width : pref_width, color : white_font, backgroundColor : blue_back}} label="Фильтрация"/>
            </div>
        )
    }
    else {
        return (
            <div className="chips-container-flex">
                <Chip sx={{width : pref_width, color : white_font, backgroundColor : blue_back}} label="Все заказы"/>
                <Chip sx={{width : pref_width}} label="Фильтрация" variant="outlined"/>
            </div>
        )
    }
}

export default SingleChip;
