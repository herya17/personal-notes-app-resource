import React from 'react';

function NoteSearch({ value, onChange }) {
    return (
        <div className="note-search">
            <input type="text" 
                placeholder="Cari catatan..." 
                value={value}
                onChange={onChange} />
        </div>
    );
}

export default NoteSearch;
