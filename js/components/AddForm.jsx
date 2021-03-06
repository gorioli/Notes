var React = require('react');

module.exports = React.createClass({

    getInitialState: function () {
        return {title: this.props.title};
    },

    componentDidMount(){
        if(navigator.userAgent.search(/android/ig) > -1){
            var self = this;
            setTimeout(()=>{
                var node = self.refs.inpTitle;
                node.focus();
                var len = node.value.length;
                node.setSelectionRange(len, len);
            }, 0);

        }
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
                {this.renderDeleteButton()}
            </div>
        );
    }
});