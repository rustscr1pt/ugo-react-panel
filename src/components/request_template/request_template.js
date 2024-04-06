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

// class Request_template extends Component {
//     constructor() {
//         super();
//         this.state = {
//             logs: [],
//             notes: [],
//             textfield: "",
//             selected_status: "NULL"
//         }
//     }
//
//     componentDidMount() { // for check if everything works fine.
//         this.reload_logs_notes()
//     }
//
//     update_textfield = (event) => {
//         this.setState(() => {
//             return {textfield: event.target.value}
//         })
//     }
//
//     add_note_and_log = () => { // ??? Add using the network and API
//         fetch('http://localhost:8000/api/orders/add_note', {
//             method: "POST",
//             body: JSON.stringify({
//                 order_id: `${this.props.displayObject.id}`,
//                 note_to_add: `${this.state.textfield}`
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then((response) => response.json())
//             .then((json) => {
//                 if (json.is_succeed) {
//                     this.reload_logs_notes();
//                 } else {
//                     console.log(json.message);
//                 }
//             })
//
//     }
//
//     on_status_change = (event) => { // Work with a status change.
//         this.setState(() => {
//             return {selected_status : event.target.value}
//         }, () => {
//             fetch("http://localhost:8000/api/orders/change_status", {
//                 method : "POST",
//                 body : JSON.stringify({
//                     order_id : `${this.props.displayObject.id}`,
//                     new_status : `${this.state.selected_status}`
//                 }),
//                 headers : {
//                     "Content-Type" : "application/json"
//                 }
//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     if (json.is_succeed) {
//                         console.log(json.message);
//                         // Add a banner which notifies, that status has been changed.
//                     }
//                     else {
//                         console.log(json.message);
//                     }
//                 })
//                 .catch(
//                     function(err) {
//                         console.log(err)
//                     })
//         })
//     }
//
//     render() {
//         return (
//             <div className='request-flex-vertical-container'>
//                 <div className='request-grid-holder__top-panel'>
//                     <IDContainer id={this.props.displayObject.id}/>
//                     <RemoveButton
//                         id={this.props.displayObject.id}
//                         reload_orders={this.props.reload_orders}
//                     />
//                 </div>
//                 <div className='request-grid-holder'>
//                     <TopTemplateContainer
//                         selectedStatus={this.state.selected_status}
//                         handleChanges={this.on_status_change}
//                         displayObject={this.props.displayObject}
//                     />
//                     <SelfDescriptionTemplate
//                         self={this.props.displayObject.customer_self_description}
//                     />
//                     <NoteAdd
//                         updater={this.update_textfield}
//                         writer={this.add_note_and_log}
//                         value={this.state.textfield}
//                     />
//                     <DoubleListFlex
//                         logs={this.state.logs}
//                         notes={this.state.notes}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default Request_template;