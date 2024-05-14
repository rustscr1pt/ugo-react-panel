import {
    toggleOrdersFilterCondition
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";

export const RequestSearchByQuery = (filterCondition, dispatch) => {
    dispatch(toggleOrdersFilterCondition());
    console.log(filterCondition);
}