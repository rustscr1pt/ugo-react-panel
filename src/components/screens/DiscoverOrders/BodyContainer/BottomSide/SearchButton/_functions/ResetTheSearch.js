import {
    setOrdersCurrentPage
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {
    toggleOrdersFilterCondition
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";
import {
    clearOrdersFilteredQuery
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
import {
    dropOrdersFilterType
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterType";

export const ResetTheSearch = (filterCondition, dispatch) => {
    dispatch(setOrdersCurrentPage(0));
    dispatch(toggleOrdersFilterCondition());
    dispatch(clearOrdersFilteredQuery());
    dispatch(dropOrdersFilterType());
    console.log(filterCondition);
}