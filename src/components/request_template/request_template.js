import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import './request_template.sass';
import NoteAdd from "../add_note_field";
import DoubleListFlex from "../double_list_flex";
import TopTemplateContainer from "../top_template_container";
import SelfDescriptionTemplate from "../self_desc_template_container";

class Request_template extends Component {
    constructor() {
        super();
        this.state = {
            logs : [],
            notes : [],
            textfield : "",
            selected_status : "NULL"
        }
    }

    componentDidMount() { // for check if everything works fine.
        fetch('http://localhost:8000/api/orders/byID', {
            method : "POST",
            body : JSON.stringify({
                token_id : `${this.props.displayObject.id}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if (json.is_succeed) {
                    this.setState({
                        logs : [...this.state.logs, ...json.reply[0].logs],
                        notes : [...this.state.notes, ...json.reply[0].notes]
                    })
                } else {

                }
            })
            .catch(
                function(err) {
                    console.log(err)
                }
            )
    }

    update_textfield = (event) => {
        this.setState(() => {
            return {textfield : event.target.value}
        })
    }

    add_note_and_log = () => { // ??? Add using the network and API
        this.setState({
            logs : [...this.state.logs, {
                id : uuidv4(),
                text : this.state.textfield
            }],
            notes : [...this.state.notes, {
                id : uuidv4(),
                text : this.state.textfield
            }],
            textfield : ""
        });
    }

    on_status_change = (event) => { // Work with a status change.
        this.setState(() => {
            return {selected_status : event.target.value}
        }, () => {
            fetch("http://localhost:8000/api/orders/change_status", {
                method : "POST",
                body : JSON.stringify({
                    order_id : `${this.props.displayObject.id}`,
                    new_status : `${this.state.selected_status}`
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.is_succeed) {
                        console.log(json.message);
                        // Add a banner which notifies, that status has been changed.
                    }
                    else {
                        console.log(json.message);
                    }
                })
                .catch(
                    function(err) {
                        console.log(err)
                    })
        })
    }

    render() {
        return (
            <div className='request-grid-holder'>
                <TopTemplateContainer
                    selectedStatus={this.state.selected_status}
                    handleChanges={this.on_status_change}
                    displayObject={this.props.displayObject}
                />
                <SelfDescriptionTemplate
                    self={this.props.displayObject.customer_self_description}
                />
                <NoteAdd
                    updater={this.update_textfield}
                    writer={this.add_note_and_log}
                    value={this.state.textfield}
                />
                <DoubleListFlex
                    logs={this.state.logs}
                    notes={this.state.notes}
                />
            </div>
        )
    }
}

export default Request_template;