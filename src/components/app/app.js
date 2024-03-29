import React from "react";
import './app.sass'
import BlackHeader from "../black_header";
import List_of_requests from "../list_of_requests";

const App = () => {
    return (
        <div className='app_flex_centered_vertical'>
            <BlackHeader/>
            <List_of_requests/>
        </div>
    )
}

export default App;