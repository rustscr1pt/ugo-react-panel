import {Component} from "react";
import './remove_button.style.sass'
class RemoveButton extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button className='remove-button-container'
                    onClick={
                        () => {
                            this.remove_order_by_id(this.props.id);
                            this.props.reload_orders();
                        }
                    }>
                X
            </button>
        )
    }

    remove_order_by_id(id) {
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
                }
                else {
                    console.log(json.message);
                }
            })
            .catch(function(err) {
                console.log(err)
            })
    }
}

export default RemoveButton;