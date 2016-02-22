var React = require('react');
var Modal = require('react-modal');
var AddForm = require('./AddForm.jsx');



module.exports = React.createClass({

    getInitialState: function() {
        return { modalIsOpen: false };
    },

    onAdd(){
        this.openModal();
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
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
                        {...this.props}
                    />

                </Modal>

                <div className="n-icon n-plus"
                     onClick={this.onAdd}>

                    <i className="fa fa-plus-square"/>
                </div>
            </div>
        );
    }
});