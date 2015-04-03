window.React = require('react');

var Application = require('./Application/index.jsx');

React.render( 
    <Application/> ,
    document.getElementById('app')
);