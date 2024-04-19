import CachedIcon from '@mui/icons-material/Cached';
import {Button} from "@mui/material";

const RefreshButton = (props) => {
    function toggle_refresh() {
        props.setReloadActivator(!props.reloadActivator);
    }

    return (
        <Button
            sx={{gridColumn : "35 / 40"}}
            variant="contained"
            endIcon={<CachedIcon/>}
            onClick={toggle_refresh}
        >
            Обновить
        </Button>
    )
}

export default RefreshButton;