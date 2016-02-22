'use strict';

//var React = require('react');
//var ReactDOM = require('react-dom');
//var data = require('./data.js');
//var ContentBox = require('./components/ContentBox.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import Notes from  './components/Notes.jsx';

(function main() {

    //// es6 works!
    //var evens = [1, 3, 5, 7, 9];
    //var nums = evens.map((v, i) => v + i);
    //console.log(evens, nums);
    //
    //var fives = [];
    //nums.forEach(v => {
    //    if (v % 5 === 0)
    //        fives.push(v);
    //});
    //console.log(fives);
    //
    //var {b, a } = { x: 1, y: 2, a: 3, b: 4 };
    //console.log(a, b);

    ReactDOM.render(
        <Notes data={data}/>,
        document.getElementById('content')
    );
})();