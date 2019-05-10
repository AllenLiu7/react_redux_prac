import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  console.log(props);
  if (props.song === null) {
    return <div>select a song</div>;
  }
  return (
    <div>
      <div>{props.song.title}</div>
      <div>{props.song.duration}</div>
    </div>
  );
};

const mapStateToProps = state => {
  //keyname can be any thing, value should be the same in combineReducer
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
