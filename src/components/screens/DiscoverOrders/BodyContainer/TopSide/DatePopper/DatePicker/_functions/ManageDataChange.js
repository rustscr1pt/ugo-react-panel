import {
    setOrdersFilteredQuery
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
import {
    setOrdersFilterType
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterType";
import {
    setOrdersFilterCondition
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";
import {
    toggleOrdersReloadActivator
} from "../../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersReloadActivator/OrdersReloadActivator";
import {GetTheResult} from "./GetTheResult";

export const ManageDataChange = (setValue, newValue, dispatch) => {
    setValue(newValue);
    console.log(GetTheResult(newValue));
    dispatch(setOrdersFilteredQuery(GetTheResult(newValue)));
    dispatch(setOrdersFilterType("date_time_added"));
    dispatch(setOrdersFilterCondition(true));
    dispatch(toggleOrdersReloadActivator());
}