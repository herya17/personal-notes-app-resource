import React from 'react';
import NoteList from '../noteActive/NoteList';
import EmptyMessage from '../utility/EmptyMessage';


function NoteArchived({ notes, onDelete, onArchive }) {
    return (
        <>
            <h2>Arsip</h2>
            {
                notes.length > 0
                  ? <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
                  : <EmptyMessage />
            }
        </>
    );
}

export default NoteArchived;
