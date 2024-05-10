import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import {useDispatch, useSelector} from "react-redux";
import {
    toggleOrdersFilterCondition
} from "../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";
import {
    setOrdersCurrentPage
} from "../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {
    clearOrdersFilteredQuery
} from "../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";

const SearchButton = () => {
    const dispatch = useDispatch();

    const filterCondition = useSelector((state) => state.ordersFilterCondition.value);

    const placement = {
        gridColumn : "35 / 40",
        gridRow : "2 / 2"
    };

    function request_search_by_query() {
        dispatch(toggleOrdersFilterCondition());
        console.log(filterCondition);
    }

    function reset_the_search() {
        dispatch(setOrdersCurrentPage(0));
        dispatch(toggleOrdersFilterCondition());
        dispatch(clearOrdersFilteredQuery());
        console.log(filterCondition);
    }

    if (filterCondition) {
        return (
            <Button
                sx={placement}
                variant="contained"
                color="error"
                endIcon={<RotateLeftIcon/>}
                onClick={reset_the_search}
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
                onClick={request_search_by_query}
            >
                Поиск
            </Button>
        )
    }
}

export default SearchButton;
