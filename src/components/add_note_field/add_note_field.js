import React from "react";
import './add_note_field.sass';

const Note_Add = () => {
    return (
        <div className="note-field-flex-box">
            <input type="text" className="note-field-flex-box__input"/>
            <button className="note-field-flex-box__button">Добавить</button>
        </div>
    )
}

export default Note_Add;