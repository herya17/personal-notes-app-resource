import React from 'react';
import NoteList from './NoteList';
import EmptyMessage from '../utility/EmptyMessage';

function NoteActive({ notes, onDelete, onArchive }) {
    return (
        <>
            <h2>Catatan Aktif</h2>
            {
                notes.length > 0
                    ? <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
                    : <EmptyMessage />
            }
        </>
    );
}

export default NoteActive;
