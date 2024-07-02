import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import {useDispatch, useSelector} from "react-redux";
import {ResetTheSearch} from "./_functions/ResetTheSearch";
import {RequestSearchByQuery} from "./_functions/RequestSearchByQuery";

export const SearchButton = () => {
    const dispatch = useDispatch();

    const filterCondition = useSelector((state) => state.ordersFilterCondition.value);

    const gridRow = "2 / 2";
    const gridColumn = "35 / 40";
    const fontSize = "1vw";

    if (filterCondition) {
        return (
            <Button
                sx={{
                    gridRow : gridRow,
                    gridColumn : gridColumn,
                    fontSize : fontSize
                }}
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
                sx={{
                    gridRow : gridRow,
                    gridColumn : gridColumn,
                    fontSize : fontSize
                }}
                variant="contained"
                endIcon={<SearchIcon/>}
                onClick={() => RequestSearchByQuery(filterCondition, dispatch)}
            >
                Поиск
            </Button>
        )
    }
}
