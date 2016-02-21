'use strict';


module.exports = {
    Global: {},
};

var Global = module.exports.Global;

Global.msg = "";

Global.init = function(msg){
    Global.msg = msg;
};

Global.printStatus = function(){
    console.log(Global.msg);
};
