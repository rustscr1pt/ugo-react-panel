import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";

const SearchButton = (props) => {
    function toggle_refresh() {
        props.setReloadActivator(!props.reloadActivator);
    }

    return (
        <Button
            sx={{gridColumn : "35 / 40"}}
            variant="contained"
            endIcon={<SearchIcon/>}
            onClick={toggle_refresh}
        >
            Поиск
        </Button>
    )
}

export default SearchButton;