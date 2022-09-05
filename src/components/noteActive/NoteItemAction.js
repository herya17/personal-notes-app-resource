import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItemAction({ id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            {
                archived
                    ? <ArchiveButton id={id} onArchive={onArchive} context="Kembalikan" />
                    : <ArchiveButton id={id} onArchive={onArchive} context="Arsipkan" />
            }
        </div>
    );
}

export default NoteItemAction;
