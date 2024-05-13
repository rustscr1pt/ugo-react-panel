import "./DateCloseButton.style.sass";
import {Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from "react-redux";
import {setOrdersCurrentPage} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {clearOrdersFilteredQuery} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
import {setOrdersFilterCondition} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";
export const DateCloseButton = (props) => {
    const dispatch = useDispatch();

    function close_and_reset() {
        props.setOpen((ps) => !ps);
        dispatch(setOrdersCurrentPage(0));
        dispatch(clearOrdersFilteredQuery());
        dispatch(setOrdersFilterCondition(false));
    }

    return (
        <div className="DataCloseButton">
            <Button
                sx={{width : "100%"}}
                variant="contained"
                color="error"
                onClick={close_and_reset}
            >
                <CloseIcon/>
            </Button>
        </div>
    )
}
