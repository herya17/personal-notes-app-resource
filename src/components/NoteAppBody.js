import React from 'react';
import NoteInput from './noteCreated/NoteInput';
import NoteActive from './noteActive/NoteActive';
import NoteArchived from './noteArchived/NoteArchived';

function NoteAppBody({ notes, noteCreated, onDelete, onArchive }) {
    const notesActive = notes.filter((note) => (
        note.archived === false
    ));

    const notesArchived = notes.filter((note) => (
        note.archived === true
    ));

    return (
        <div className="note-app__body">
            <NoteInput noteCreated={noteCreated} />
            <NoteActive notes={notesActive} onDelete={onDelete} onArchive={onArchive} />
            <NoteArchived notes={notesArchived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteAppBody;
