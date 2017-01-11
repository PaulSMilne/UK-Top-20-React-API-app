var React = require('react');
var TopTwentySong = require('./TopTwentySong.jsx');

var TopTwentyList = function(props){

     var playlist = props.songs.map(
          function(track, index){
               return (
                    <TopTwentySong song={track} key={index} />
               )
          });

     return (
          <section className='playlist'>
               {playlist}
          </section>
     )
};

module.exports = TopTwentyList;