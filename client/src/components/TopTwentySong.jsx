var React = require('react');

var TopTwentySong = function(props){
     return(
     <p>{props.song.title.label}</p>
     )
};

module.exports = TopTwentySong;