import {
    setOrdersCurrentPage
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {
    clearOrdersFilteredQuery
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
import {
    setOrdersFilterCondition
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";

// Close the datepicker and reset all values
export const CloseAndReset = (setOpen, dispatch) => {
    setOpen((ps) => !ps);
    dispatch(setOrdersCurrentPage(0));
    dispatch(clearOrdersFilteredQuery());
    dispatch(setOrdersFilterCondition(false));
}