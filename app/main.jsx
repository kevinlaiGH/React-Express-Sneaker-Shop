var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

console.log("Hello from JSX");
var SneakerItemList = require('./components/SneakerItemList.jsx');

function render() {
    React.render(<SneakerItemList />, app)
}
