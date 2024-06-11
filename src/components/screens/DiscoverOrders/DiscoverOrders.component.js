import React from "react";
import './DiscoverOrders.style.sass'
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {setOrdersCurrentPage} from "../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {setOrdersRowsPerPage} from "../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowsPerPage";
import {BasicOrderTable} from "./BasicTable/BasicOrderTable.component";
import {BodyContainer} from "./BodyContainer/BodyContainer.component";
import {PagePagination} from "./PagePagination/PagePagination.component";
import {LogoutFAB} from "./LogoutFAB/LogoutFAB.component";
import {GetAndDisplayOrders} from "./_functions/GetAndDisplayOrders.ts";


export const DiscoverOrders = () => {
    const dispatch = useDispatch();

    const sourceType = useSelector((state) => state.selectedBase.value);

    const filteredQuery = useSelector((state) => state.ordersFilteredQuery.value);
    const filterType = useSelector((state) => state.ordersFilterType.value);

    const page = useSelector((state) => state.ordersCurrentPage.value);
    const rowsPerPage = useSelector((state) => state.ordersRowsPerPage.value);
    const rowsCount = useSelector((state) => state.ordersRowCount.value);

    // On change useEffect is activated and depending on its value makes different requests
    const filterCondition = useSelector((state) => state.ordersFilterCondition.value);

    const reloadActivator = useSelector((state) => state.ordersReloadActivator.value);

    // Make a request and display orders using rowsPerPage & page
    GetAndDisplayOrders(filterCondition, rowsPerPage, page, filterType, filteredQuery, reloadActivator, dispatch, sourceType);

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
