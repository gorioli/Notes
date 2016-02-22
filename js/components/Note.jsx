var React = require('react');

module.exports = React.createClass({


    render(){

        return (
            <div className="n-note"
                 onClick={this.props.onNoteUpdate}
                 data-id={this.props.id}>

                    <span className="n-number">
                        {this.props.id + 1}
                    </span>
                    <span className="n-title">
                        {this.props.title}
                    </span>
                    <span className="n-slide-right">
                        <i className="fa fa-chevron-right"></i>
                    </span>
            </div>
        );

    }


});