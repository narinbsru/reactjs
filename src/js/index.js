//scss
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import '../assets/styles/style.scss';

//call js
import MainApp from './MainApp';
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

ReactDOM.render( <MainApp/> ,document.getElementById('mainapp') );

(function () {
    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: [{
                        x: -10,
                        y: 0
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 10,
                        y: 5
                }]
            }]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
})();
