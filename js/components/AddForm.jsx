var React = require('react');

module.exports = React.createClass({

    onSave(){
        var value = this.refs.inpTitle.value;
        this.props.saveNote(value);
        this.props.closeModal();
    },

    render () {
        return (
            <div>
                <input
                    placeholder="Note title here"
                    ref="inpTitle"
                />
                <button
                    onClick={this.onSave} >
                    Save
                    </button>
            </div>
        );
    }
});