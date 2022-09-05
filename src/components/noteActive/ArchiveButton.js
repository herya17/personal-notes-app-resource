import React from "react";

function ArchiveButton({ id, onArchive, context }) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{context}</button>
}

export default ArchiveButton;
