import React, {useEffect, useState} from "react";
import './mui_authorized.style.sass'
import BlackHeader from "../../black_header"
import BasicTable from "../mui_table";
import BodyContainer from "../../mui_top_panel/body-container";
import Box from "@mui/material/Box";


const MuiAuthorized = () => {
    const [OrdersVector, setOrdersVector] = useState([]);
    const [clonedOrders, setClonedOrders] = useState([]);

    const [filteredQuery, setFilteredQuery] = useState("");
    const [filterType, setFilterType] = useState("");

    const [reloadActivator, setReloadActivator] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/api/orders/get", {
            method : "POST",
            body : JSON.stringify({
                token_id : "nil"
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then(
                (response) => response.json())
            .then((json) => {
                console.log(json);
                setOrdersVector(json.reply)
                setClonedOrders(json.reply);
            })
            .catch(
                function(err){
                    console.log(err)
                }
            )
    }, [reloadActivator]);

    useEffect(() => {
        if (filteredQuery === "") {
            setOrdersVector(clonedOrders);
        }
        else {
            console.log(filterType, filteredQuery);
            switch (filterType) {
                case "ID":
                    setOrdersVector(clonedOrders.filter((element) => element.id == filteredQuery));
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
                setOrdersVector={setOrdersVector}
            />
            <BasicTable
                object_vector={OrdersVector}
                reloadActivator={reloadActivator}
                setReloadActivator={setReloadActivator}
            />
        </Box>
    )
}

export default MuiAuthorized;