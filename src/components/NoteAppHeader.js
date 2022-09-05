import React from 'react';
import NoteSearch from './utility/NoteSearch';

function NoteAppHeader({ value, onChange }) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch value={value} onChange={onChange} />
        </div>
    );
}

export default NoteAppHeader;
