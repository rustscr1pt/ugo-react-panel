import React, {Component} from "react";
import './add_note_field.sass';


class NoteAdd extends Component {
    render() {
        return (
            <div className="note-field-flex-box">
                <input type="text" className="note-field-flex-box__input" value={this.props.value} onChange={this.props.updater}/>
                <button
                    className="note-field-flex-box__button"
                    onClick={this.props.writer}>Добавить
                </button>
            </div>
        )
    }
}

export default NoteAdd;