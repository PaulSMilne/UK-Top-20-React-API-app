var React = require('react');
var TopTwentyHeader = require('./TopTwentyHeader.jsx');
//var TopTwentyList = require('./TopTwentyList.jsx');

var TopTwenty = React.createClass({

     render: function(){

          return(
               <section className='main-content'>
                    <TopTwentyHeader title="UK Top 20" />
               </section>
          )
     }

});

module.exports = TopTwenty;