var React = require('react');

module.exports = React.createClass({



    onClick(){
        this.props.openModal();
    },


    render () {

        return (
            <div>

                <div className="n-icon n-plus"
                     onClick={this.onClick}>

                    <i className="fa fa-plus-square"/>
                </div>
            </div>
        );
    }
});