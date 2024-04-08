import React, {useEffect, useState} from "react";
import './app.sass'
import BlackHeader from "../black_header";
import BasicTable from "../mui_collection/mui_table";
import {Alert} from "@mui/material";


const App = () => {
    const [OrdersVector, setOrdersVector] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
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
        <div className='app_flex_centered_vertical'>
            <BlackHeader/>
            <Alert sx={{position : "absolute", left : "2.5%", bottom : "5%", zIndex : "3"}} variant="filled" severity="success">This is a success Alert.</Alert>
            <BasicTable object_vector={OrdersVector} reload_orders={setOrdersVector}/>
        </div>
    )
}

export default App;