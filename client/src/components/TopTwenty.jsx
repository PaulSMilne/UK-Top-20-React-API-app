var React = require('react');
var TopTwentyHeader = require('./TopTwentyHeader.jsx');
//var TopTwentyList = require('./TopTwentyList.jsx');

var TopTwenty = React.createClass({

     getInitialState: function () {
          return { songs: [] }
     },

     componentDidMount: function() {
          var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
          var request = new XMLHttpRequest();
          request.open('GET', url);
          request.onload = function(){
            var data = JSON.parse(request.responseText);
            this.setState({songs: data.feed.entry});
          }.bind(this);
          request.send();
     },

     render: function(){

          return(
               <section className='main-content'>
                    <TopTwentyHeader title="UK Top 20" />
               </section>
          )
          console.log(data);
     }

});

module.exports = TopTwenty;