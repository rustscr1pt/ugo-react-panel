import React from "react";
import './add_note_field.sass';

export default function Note_Add({childToParent}) {
    function return_input() {
        return document.getElementsByClassName('note-field-flex-box__input')[0].value
    }

    return (
        <div className="note-field-flex-box">
            <input type="text" className="note-field-flex-box__input"/>
            <button
                className="note-field-flex-box__button"
                onClick={() => childToParent(return_input())}>Добавить</button>
        </div>
    )
}