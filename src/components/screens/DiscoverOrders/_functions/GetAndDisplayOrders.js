import {useEffect} from "react";
import route_fillers from "../../../../constants&addons/route_fillers";
import {setOrdersVector} from "../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersVector/OrdersVector";
import {
    setOrdersRowCount
} from "../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowCount";

// Make a request and display orders using rowsPerPage & page
export const GetAndDisplayOrders = (filterCondition, rowsPerPage, page, filterType, filteredQuery, reloadActivator, dispatch) => {
    useEffect(() => {
        if (filterCondition) {
            fetch(`${route_fillers.url}/api/orders/page/filtered`, {
                method : "POST",
                body : JSON.stringify({
                    rows_per_page : `${rowsPerPage}`,
                    page_number : `${page}`,
                    filter_type : `${filterType}`,
                    filter_query : `${filteredQuery}`
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    dispatch(setOrdersVector(json.reply));
                    dispatch(setOrdersRowCount(parseInt(json.message)));
                })
                .catch(function(err) {
                    console.log(err);
                })
        }
        else {
            fetch(`${route_fillers.url}/api/orders/get/page`, {
                method : "POST",
                body : JSON.stringify({
                    rows_per_page : `${rowsPerPage}`,
                    page_number : `${page}`
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
                .then(
                    (response) => response.json())
                .then((json) => {
                    console.log(json);
                    dispatch(setOrdersVector(json.reply))
                    dispatch(setOrdersRowCount(parseInt(json.message)));
                })
                .catch(
                    function(err){
                        console.log(err)
                    }
                )
        }
    }, [reloadActivator, page, rowsPerPage, filterCondition]);
};