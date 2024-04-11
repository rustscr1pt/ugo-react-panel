import React, {useEffect, useState} from "react";
import './mui_authorized.style.sass'
import BlackHeader from "../../black_header"
import BasicTable from "../mui_table";
import BodyContainer from "../../mui_top_panel/body-container";
import Box from "@mui/material/Box";


const MuiAuthorized = () => {
    const [OrdersVector, setOrdersVector] = useState([]);
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
            })
            .catch(
                function(err){
                    console.log(err)
                }
            )
    }, [OrdersVector.length]);
    return (
        <Box>
            <BodyContainer setOrdersVector={setOrdersVector}/>
            <BasicTable object_vector={OrdersVector} reload_orders={setOrdersVector}/>
        </Box>
    )
}

export default MuiAuthorized;