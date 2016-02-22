var React = require('react');
var Plus = require('./Plus.jsx');

module.exports = React.createClass({

    NOTES: 'NOTES',

    getInitialState(){
        return {
            notes: []
        }
    },

    componentDidMount () {
        var notes = JSON.parse(localStorage.getItem(this.NOTES)) || [];

        this.setState({notes: notes});

    },

    saveNote(title){
        var notes = this.state.notes.slice();
        notes.push(title);
        localStorage.setItem(this.NOTES, JSON.stringify(notes));
        this.setState({notes: notes});
    },

    renderNotes(){

        var notes = this.state.notes.map((note, i) => {
            return (
                <div className="n-note"
                    key={'note_' + i}>
                    <span className="n-number">
                        {i + 1}
                    </span>
                    <span className="n-title">
                        {note}
                    </span>
                    <span className="n-slide-right">
                        <i className="fa fa-chevron-right"></i>
                    </span>
                </div>
            );
        });

        return notes;
    },

    render () {
        return (
            <div>
                <section>
                    <Plus
                        saveNote={this.saveNote}
                    />

                    {this.renderNotes()}
                </section>
            </div>
        );
    }
});