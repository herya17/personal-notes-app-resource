import React from 'react';
import FormInput from './FormInput';

function NoteInput({ noteCreated }) {
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <FormInput noteCreated={noteCreated} />
        </div>
    );
}

export default NoteInput;
