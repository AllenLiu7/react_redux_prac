import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  // this.props === { songs: state.songs } from (mapStoreToProps)
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    // this.props === { songs: state.songs };
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStoreToProps = state => {
  //return the this.props we need to the component
  return { songs: state.songs };
};

//connect to store
export default connect(mapStoreToProps)(SongList);
