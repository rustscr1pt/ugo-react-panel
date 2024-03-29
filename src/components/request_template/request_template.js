import React, {useState} from "react";
import './request_template.sass';
import Status_selector from "../status_selector/status_selector";
import Collapsable_list from "../collapsible";
import Note_Add from "../add_note_field";

const Request_template = () => {
    const [data, setData] = useState("");

    const childToParent = (childdata) => {
        setData(childdata)
    }

    return (
        <div className='request-grid-holder'>
            <span className='request-grid-holder__id'>1</span>
            <Status_selector/>
            <span className='request-grid-holder__name'>Egor</span>
            <span className='request-grid-holder__email'>iekgithub@gmail.com</span>
            <span className='request-grid-holder__self'>I am the customer who wishes to buy some product, plz send me some samples.</span>
            <span className='request-grid-holder__added'>2024-03-29 10:53:08</span>
            <Note_Add childToParent={childToParent}/>
            <Collapsable_list/>
            {data}
        </div>
    )
}

export default Request_template;