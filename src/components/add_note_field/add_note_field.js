import React, {Component} from "react";
import './add_note_field.sass';

const NoteAdd = (props) => {

    function refresh_textfield(event) {
        console.log(event.target.value)
        props.updater(event.target.value)
    }

    return (
        <div className="note-field-flex-box">
            <input type="text" className="note-field-flex-box__input" value={props.value}
                   onChange={refresh_textfield}/>
            <button
                className="note-field-flex-box__button"
                onClick={props.writer}>Добавить
            </button>
        </div>
    )
}

export default NoteAdd;