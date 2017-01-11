var React = require('react');
var ReactDOM = require('react-dom');
var TopTwenty = require('./components/TopTwenty.jsx')

window.onload = function(){
  ReactDOM.render(
    <TopTwenty />,
    document.getElementById('app')
  );
}
