var React = require('react');
var Plus = require('./Plus.jsx');
var Modal = require('react-modal');
var AddForm = require('./AddForm.jsx');
var Note = require('./Note.jsx');

module.exports = React.createClass({

    NOTES: 'NOTES',
    currentNote: -1,

    getInitialState(){
        return {
            notes: [],
            modalIsOpen: false
        }
    },

    componentDidMount () {
        var notes = JSON.parse(localStorage.getItem(this.NOTES)) || [];

        this.setState({notes: notes});

    },

    openModal: function () {
        this.setState({modalIsOpen: true});
    },

    closeModal: function () {
        this.setState({modalIsOpen: false});
    },

    saveNote(title){
        if(!title){
            this.currentNote = -1;
            return;
        }
        var notes = this.state.notes.slice();
        if (this.currentNote > -1) {
            notes[this.currentNote] = title;
            this.currentNote = -1;
        }
        else {
            notes.push(title);
        }
        localStorage.setItem(this.NOTES, JSON.stringify(notes));
        this.setState({notes: notes});
    },

    onNoteUpdate(ev){
        var self = this;
        if (ev.currentTarget.className.search(/n-note/) > -1) {
            Array.prototype.forEach
                .call(ev.currentTarget.attributes,
                    att => {
                        if (att.name == "data-id") {
                            self.currentNote = parseInt(att.value);
                            self.setState({modalIsOpen: true});
                            ev.stopPropagation();
                        }
                    });
        }
    },

    renderNotes(){

        var notes = this.state.notes.map((note, i) => {
            return (
                <Note
                    id={i}
                    onNoteUpdate={this.onNoteUpdate}
                    title={note}
                    key={'note_' + i}>

                </Note>
            );
        });

        return notes;
    },

    render () {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                >

                    <AddForm
                        closeModal={this.closeModal}
                        saveNote={this.saveNote}
                        title={this.currentNote > -1 ? this.state.notes[this.currentNote] : ''}
                    />

                </Modal>

                <section>
                    <Plus
                        openModal={this.openModal}
                    />

                    {this.renderNotes()}
                </section>
            </div>
        );
    }
});