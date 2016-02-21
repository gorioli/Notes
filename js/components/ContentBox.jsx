var React = require('react');
var SomeContent = require('./SomeContent.jsx');
var externalModule = require('./../externalModule.js');

module.exports = React.createClass({

    componentDidMount () {
        externalModule.Global.init("Hello from webpack react bootstrap!");
    },

    render () {
        let txt_mainConent = this.props.data.txt_mainConent;
        let other = Object.assign({}, {hello: this.props.data.hello}, {stam: this.props.data.stam});
        return (
            <div>
                <section>
                    {txt_mainConent}
                    <SomeContent {...other}/>
                </section>
            </div>
        );
    }
});
