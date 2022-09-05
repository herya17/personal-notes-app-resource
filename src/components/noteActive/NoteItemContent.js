import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

function NoteItemContent({ title, createdAt, body }) {
    return (
        <div className="note-item__content">
            <NoteItemTitle title={title} />
            <NoteItemDate createdAt={createdAt} />
            <NoteItemBody body={body} />
        </div>
    );
}

export default NoteItemContent;
