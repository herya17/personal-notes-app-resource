import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxText: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const max = 50;
        const titleInput = event.target.value.slice(0, max);
        const titleInputLength = titleInput.length;

        this.setState(() => {
            return {
                title: titleInput,
                maxText: max - titleInputLength,
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.noteCreated(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
                maxText: 50,
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">
                    Sisa karakter: {this.state.maxText}
                </p>
                <input 
                    className="note-input__title" 
                    type="text" 
                    placeholder="Ini adalah judul..." 
                    required
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler} />
                <textarea
                    className="note-input__body" 
                    type="text" 
                    placeholder="Tuliskan catatanmu disini..." 
                    required
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default FormInput;
