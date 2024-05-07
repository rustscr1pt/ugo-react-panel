import React, {useEffect, useState} from "react";
import './DiscoverOrders.style.sass'
import BasicOrderTable from "./BasicTable";
import BodyContainer from "./BodyContainer";
import Box from "@mui/material/Box";
import route_fillers from "../../../constants&addons/route_fillers";
import PagePagination from "./PagePagination";
import LogoutFAB from "./LogoutFAB";


const DiscoverOrders = (props) => {

    const [OrdersVector, setOrdersVector] = useState([]);

    const [filteredQuery, setFilteredQuery] = useState("");
    const [filterType, setFilterType] = useState("");

    const [reloadActivator, setReloadActivator] = useState(false);

    const [rowsCount, setRowsCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // On change useEffect is activated and depending on its value makes different requests
    const [filterCondition, setFilterCondition] = useState(false);

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
                    setOrdersVector(json.reply);
                    setRowsCount(parseInt(json.message));
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
                    setOrdersVector(json.reply);
                    setRowsCount(parseInt(json.message));
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
            <BodyContainer
                filterType={filterType}
                setPage={setPage}
                setFilterType={setFilterType}
                filteredQuery={filteredQuery}
                setFilteredQuery={setFilteredQuery}
                filterCondition={filterCondition}
                setFilterCondition={setFilterCondition}
                setPagePosition={props.setPagePosition}
            />
            <BasicOrderTable
                object_vector={OrdersVector}
                reloadActivator={reloadActivator}
                setReloadActivator={setReloadActivator}
            />
            <PagePagination
                rowsCount={rowsCount}
                page={page}
                setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
            />
            <LogoutFAB
                setIsAuthorized={props.setIsAuthorized}
            />
        </Box>
    )
}

export default DiscoverOrders;
