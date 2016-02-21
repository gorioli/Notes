var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <span>
                I am a <b data-class="special">{this.props.children}!</b>&nbsp;
            </span>
        )
    }
});
