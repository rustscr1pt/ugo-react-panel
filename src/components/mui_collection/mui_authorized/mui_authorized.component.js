import React, {useEffect, useRef, useState} from "react";
import './mui_authorized.style.sass'
import BasicTable from "../mui_table";
import BodyContainer from "../../mui_top_panel/body-container";
import Box from "@mui/material/Box";
import route_fillers from "../../../constants/route_fillers";
import PagePagination from "../mui_pagination";


const MuiAuthorized = () => {
    const [OrdersVector, setOrdersVector] = useState([]);
    const [clonedOrders, setClonedOrders] = useState([]);

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
                    setClonedOrders(json.reply)
                })
                .then(() => {
                    fetch(`${route_fillers.url}`)
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
                    setClonedOrders(json.reply);
                    setRowsCount(parseInt(json.message));
                })
                .catch(
                    function(err){
                        console.log(err)
                    }
                )
        }
    }, [reloadActivator, page, rowsPerPage, filterCondition]);

    useEffect(() => {
        if (filteredQuery === "") {
            setOrdersVector(clonedOrders);
        }
        else {
            console.log(filterType, filteredQuery);
            switch (filterType) {
                case "ID":
                    setOrdersVector(clonedOrders.filter((element) => `${element.id}`.includes(filteredQuery.toLowerCase())));
                    break
                case "Статус":
                    setOrdersVector(clonedOrders.filter((element) => element.request_status.toLowerCase().includes(filteredQuery.toLowerCase())))
                    break
                case "Имя":
                    setOrdersVector(clonedOrders.filter((element) => element.customer_name.toLowerCase().includes(filteredQuery.toLowerCase())))
                    break
                case "Почта":
                    setOrdersVector(clonedOrders.filter((element) => element.customer_email.toLowerCase().includes(filteredQuery.toLowerCase())))
                    break
                case "Описание":
                    setOrdersVector(clonedOrders.filter((element) => element.customer_self_description.toLowerCase().includes(filteredQuery.toLowerCase())))
                    break
                default:
                    break
            }
        }
    }, [filteredQuery])

    return (
        <Box sx={{width : "100%"}}>
            <BodyContainer
                filterType={filterType}
                setFilterType={setFilterType}
                filteredQuery={filteredQuery}
                setFilteredQuery={setFilteredQuery}
                reloadActivator={reloadActivator}
                setReloadActivator={setReloadActivator}
            />
            <BasicTable
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
        </Box>
    )
}

export default MuiAuthorized;