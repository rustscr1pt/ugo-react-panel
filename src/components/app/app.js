import React, {Component} from "react";
import './app.sass'
import BlackHeader from "../black_header";
import List_of_requests from "../list_of_requests";

class App extends Component {
    constructor() {
        super();
        this.state = {
            orders_vector : []
        }
    }

    fetch_orders_list() {
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
                this.setState(() => {
                    return {orders_vector : json.reply}
                }, () => {
                    console.log(this.state.orders_vector)
                })
            })
            .catch(
                function(err){
                    console.log(err)
                }
            )
    }
    componentDidMount() {
        this.fetch_orders_list()
    }

    render() {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <List_of_requests
                    object_vector={this.state.orders_vector}
                    reload_orders={this.fetch_orders_list}
                />
            </div>
        )
    }
}

export default App;