import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

const SearchButton = (props) => {

    const placement = {
        gridColumn : "35 / 40",
        gridRow : "2 / 2"
    };

    function request_search_by_query() {
        props.setFilterCondition(!props.filterCondition);
        console.log(props.filterCondition);
    }

    function reset_the_search() {
        props.setFilterCondition(!props.filterCondition);
        console.log(props.filterCondition);
    }

    if (props.filterCondition) {
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