import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import {useDispatch, useSelector} from "react-redux";
import {ResetTheSearch} from "./_functions/ResetTheSearch";
import {RequestSearchByQuery} from "./_functions/RequestSearchByQuery";

export const SearchButton = () => {
    const dispatch = useDispatch();

    const filterCondition = useSelector((state) => state.ordersFilterCondition.value);

    const placement = {
        gridColumn : "35 / 40",
        gridRow : "2 / 2"
    };

    if (filterCondition) {
        return (
            <Button
                sx={placement}
                variant="contained"
                color="error"
                endIcon={<RotateLeftIcon/>}
                onClick={() => ResetTheSearch(filterCondition, dispatch)}
            >
                Сброс
            </Button>
        )
    }
    else {
        return (
            <Button
                sx={placement}
                variant="contained"
                endIcon={<SearchIcon/>}
                onClick={() => RequestSearchByQuery(filterCondition, dispatch)}
            >
                Поиск
            </Button>
        )
    }
}
