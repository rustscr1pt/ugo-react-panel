import {Component} from "react";
import './remove_button.style.sass'

const RemoveButton = (props) => {
    function remove_order_by_id(id, setMain) {
        fetch('http://localhost:8000/api/orders/remove_order', {
            method : "POST",
            body : JSON.stringify({
                id : `${id}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json.message);
                    setMain([]);
                }
                else {
                    console.log(json.message);
                }
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    return (
        <button className='remove-button-container' onClick={() => remove_order_by_id(props.id, props.reload_orders)}>
            X
        </button>
    )

}

export default RemoveButton;