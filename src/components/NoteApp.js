import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import { getInitialData, showFormattedDate } from '../utils/data';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onNoteCreatedHandler = this.onNoteCreatedHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);

        const message = "Anda yakin ingin hapus?";
        const confirm = window.confirm(message);

        if (confirm) {
            this.setState(() => {
                return {
                    notes
                }
            })
        }
    }

    onArchivedHandler(id) {
        const notes = this.state.notes.map((note) => (
            note.id === id
                ? {
                    ...note,
                    archived: !note.archived,
                }
                : note
        ));

        this.setState(() => {
            return {
                notes
            }
        })
    }

    onNoteCreatedHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(new Date()),
                        archived: false,
                    }
                ]
            }
        })
    }

    render() {
        const notes = this.state.notes.filter((note) => (
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
        ));

        return (
            <>
                <NoteAppHeader
                    value={this.state.search}
                    onChange={this.onSearchChangeEventHandler} />
                <NoteAppBody 
                    notes={notes}
                    noteCreated={this.onNoteCreatedHandler}
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchivedHandler} />
            </>
        );
    }
}

export default NoteApp;
