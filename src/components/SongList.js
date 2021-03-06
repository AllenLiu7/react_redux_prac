import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  // this.props === { songs: state.songs } from (mapStoreToProps)
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    // this.props === { songs: state.songs } + seleteSong f()
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStoreToProps = state => {
  //console.log(state);
  //return the this.props we need to the component
  //state.count comes from the combineReducer function. "songs" equals to the key value
  return { songs: state.songs };
};

//connect SongList to store, pass in the state and action creator seperatly
export default connect(
  mapStoreToProps,
  {
    selectSong: selectSong
  }
)(SongList);
