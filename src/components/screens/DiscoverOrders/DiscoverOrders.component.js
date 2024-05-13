import React, {useEffect} from "react";
import './DiscoverOrders.style.sass'
import Box from "@mui/material/Box";
import route_fillers from "../../../constants&addons/route_fillers";
import {useDispatch, useSelector} from "react-redux";
import {setOrdersVector} from "../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersVector/OrdersVector";
import {setOrdersRowCount} from "../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowCount";
import {setOrdersCurrentPage} from "../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {setOrdersRowsPerPage} from "../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowsPerPage";
import {BasicOrderTable} from "./BasicTable/BasicOrderTable.component";
import {BodyContainer} from "./BodyContainer/BodyContainer.component";
import {PagePagination} from "./PagePagination/PagePagination.component";
import {LogoutFAB} from "./LogoutFAB/LogoutFAB.component";


export const DiscoverOrders = () => {
    const dispatch = useDispatch();

    const filteredQuery = useSelector((state) => state.ordersFilteredQuery.value);
    const filterType = useSelector((state) => state.ordersFilterType.value);

    const page = useSelector((state) => state.ordersCurrentPage.value);
    const rowsPerPage = useSelector((state) => state.ordersRowsPerPage.value);
    const rowsCount = useSelector((state) => state.ordersRowCount.value);

    // On change useEffect is activated and depending on its value makes different requests
    const filterCondition = useSelector((state) => state.ordersFilterCondition.value);

    const reloadActivator = useSelector((state) => state.ordersReloadActivator.value);

    // Make a request and display orders using rowsPerPage & page
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

    return (
        <Box sx={{width : "100%"}}>
            <BodyContainer/>
            <BasicOrderTable/>
            <PagePagination
                rowsCount={rowsCount}
                page={page}
                rowsPerPage={rowsPerPage}
                changePage={setOrdersCurrentPage}
                setRowsPerPage={setOrdersRowsPerPage}
            />
            <LogoutFAB/>
        </Box>
    )
}
