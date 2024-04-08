import React, {useEffect, useState} from "react";
import './app.sass'
import BlackHeader from "../black_header";
import BasicTable from "../mui_collection/mui_table";


const App = () => {
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
        <div className='app_flex_centered_vertical'>
            <BlackHeader/>
            <BasicTable object_vector={OrdersVector} reload_orders={setOrdersVector}/>
        </div>
    )
}

export default App;