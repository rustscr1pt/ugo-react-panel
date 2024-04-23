import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";

const SearchButton = (props) => {

    function request_search_by_query() {
        props.setFilterCondition(!props.filterCondition);
        console.log(props.filterCondition);
    }

    return (
        <Button
            sx={{
                gridColumn : "35 / 40",
                gridRow : "2 / 2"
            }}
            variant="contained"
            endIcon={<SearchIcon/>}
            onClick={request_search_by_query}
        >
            Поиск
        </Button>
    )
}

export default SearchButton;