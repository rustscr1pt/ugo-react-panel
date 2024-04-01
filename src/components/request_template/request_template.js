import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import './request_template.sass';
import Status_selector from "../status_selector/status_selector";
import NoteAdd from "../add_note_field";
import DoubleListFlex from "../double_list_flex";

class Request_template extends Component {
    constructor() {
        super();
        this.state = {
            logs : [],
            notes : [],
            textfield : ""
        }
    }

    update_textfield = (event) => {
        this.setState(() => {
            return {textfield : event.target.value}
        })
    }

    add_note_and_log = () => {
        this.setState(() => {
            return {
                logs : this.state.logs.push({
                    id : uuidv4(),
                    desc : this.state.textfield
                }),
                notes : this.state.notes.push({
                    id : uuidv4(),
                    desc : this.state.textfield
                }),
                textfield : ""
            }
        })
    }

    render() {
        return (
            <div className='request-grid-holder'>
                <span className='request-grid-holder__id'>1</span>
                <Status_selector/>
                <span className='request-grid-holder__name'>Egor</span>
                <span className='request-grid-holder__email'>iekgithub@gmail.com</span>
                <span className='request-grid-holder__self'>I am the customer who wishes to buy some product, plz send me some samples.</span>
                <span className='request-grid-holder__added'>2024-03-29 10:53:08</span>
                <NoteAdd updater={this.update_textfield} write={this.add_note_and_log}/>
                <DoubleListFlex/>
            </div>
        )
    }
}

export default Request_template;