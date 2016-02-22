var React = require('react');

module.exports = React.createClass({

    getInitialState: function () {
        return {title: this.props.title};
    },

    componentDidMount(){
        setTimeout(()=>{
            this.refs.inpTitle.getDOMNode().focus();
        }, 100);

    },

    onSave(){
        this.props.saveNote(this.state.title);
        this.props.closeModal();
    },

    onDelete(){
        this.props.deleteNode();
        this.props.closeModal();
    },

    handleChange: function (event) {
        this.setState({title: event.target.value});
    },

    renderDeleteButton(){
        if (this.props.title.length > 0) {
            return (
                <button
                    onClick={this.onDelete}
                    className="n-delete">
                    Delete
                </button>
            );
        }
        else {
            return null;
        }
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
                    onClick={this.onSave}
                    className="n-add">
                    Save
                </button>
                <button
                    onClick={this.onTest}
                    className="n-add">
                    Test
                </button>
                {this.renderDeleteButton()}
            </div>
        );
    }
});