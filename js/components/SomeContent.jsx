var React = require('react');
var ReactDOM = require('react-dom');
var externalModule = require('./../externalModule.js');
var SelfIntro = require('./SelfIntro.jsx');

module.exports = React.createClass({

    countFailure: 0,

    addNow: function (e) {
        e.preventDefault();

        externalModule.Global.printStatus();

        var disableAddNowBtn = function () {
            var btnClickMe = ReactDOM.findDOMNode(this.refs.btnClickMe);

            btnClickMe.setAttribute("data-class", "disabled, disabled--font-color");
            btnClickMe.disabled = true;
            btnClickMe.value = "That's it";
        };

        if (this.countFailure == 1) {
            disableAddNowBtn.bind(this)();
        }
        else{
            ReactDOM.findDOMNode(this.refs.btnClickMe).value = 'One more time'
        }
        this.countFailure++;

        return;
    },

    render: function () {
        return (
            <article>
                <h1>{this.props.hello}</h1> <br/>
                <SelfIntro>Some Content</SelfIntro>
                <br/><br/>
                <input ref="btnClickMe" type="button" value="Click me" onClick={this.addNow} />
            </article>
        );
    }
});