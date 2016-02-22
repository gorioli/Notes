var React = require('react');

module.exports = React.createClass({

    getInitialState: function() {
        return {title: this.props.title};
    },

    onSave(){
        this.props.saveNote(this.state.title);
        this.props.closeModal();
    },

    handleChange: function(event) {
        this.setState({title: event.target.value});
    },

    render () {
        return (
            <div>
                <input
                    placeholder="Note title here"
                    ref="inpTitle"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.onSave} >
                    Save
                    </button>
            </div>
        );
    }
});