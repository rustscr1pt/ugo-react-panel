import React, {useEffect, useState} from "react";
import './request_template.sass';
import NoteAdd from "../add_note_field";
import DoubleListFlex from "../double_list_flex";
import TopTemplateContainer from "../top_template_container";
import SelfDescriptionTemplate from "../self_desc_template_container";
import IDContainer from "../id_container";
import RemoveButton from "../remove_button";


const Request_template = (props) => {
    const [logs, setLogs] = useState([]);
    const [notes, setNotes] = useState([]);
    const [textField, setTextField] = useState("");
    const [status, setStatus] = useState("NULL");

    function reload_logs_notes() { // Reload notes and logs lists
        fetch('http://localhost:8000/api/orders/byID', {
            method : "POST",
            body : JSON.stringify({
                token_id : `${props.displayObject.id}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if (json.is_succeed) {
                    setLogs(json.reply[0].logs);
                    setNotes(json.reply[0].notes);
                } else {

                }
            })
            .catch(
                function(err) {
                    console.log(err)
                }
            )
    }

    function add_note_and_log() {
        fetch('http://localhost:8000/api/orders/add_note', {
            method : "POST",
            body : JSON.stringify({
                order_id : `${props.displayObject.id}`,
                note_to_add : `${textField}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    reload_logs_notes();
                }
                else {
                    console.log(json.message);
                }
            })
    }

    useEffect(() => {
        reload_logs_notes();
    }, []);

    return (
        <div className='request-flex-vertical-container'>
            <div className='request-grid-holder__top-panel'>
                <IDContainer id={props.displayObject.id}/>
                <RemoveButton
                    id={props.displayObject.id}
                    reload_orders={props.reload_orders}
                />
            </div>
            <div className='request-grid-holder'>
                <TopTemplateContainer
                    selectedStatus={status}
                    handleChanges={setStatus}
                    displayObject={props.displayObject}
                />
                <SelfDescriptionTemplate
                    self={props.displayObject.customer_self_description}
                />
                <NoteAdd
                    updater={setTextField}
                    writer={add_note_and_log}
                    value={textField}
                />
                <DoubleListFlex
                    logs={logs}
                    notes={notes}
                />
            </div>
        </div>
    )
}

export default Request_template;