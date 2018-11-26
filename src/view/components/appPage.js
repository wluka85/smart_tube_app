import React, { Component } from 'react';
import ItemsList from './itemsList';
import HeaderContainer from './headerContainer';
import DetailedVideo from './detailedVideo';
import CatalogContainer from './catalogContainer';
import CatalogCreatorComponent from './catalogCreatorComponent';
import PlaylistContainer from './playlistContainer';

export class AppPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      searchCriteria: ''
    }
  }


  render() {
    return (
      <div id="container">
        <HeaderContainer
          controller = {this.props.controller}
          loadPageAction={this.props.loadPageAction}
        />
        <div id="main-container">
          <div id="video-list-container">
            <ItemsList controller = {this.props.controller}/>
            <DetailedVideo controller = {this.props.controller}/>
          </div>
        </div>
        <CatalogContainer controller={this.props.controller} />
        <CatalogCreatorComponent controller={this.props.controller}/>
        <PlaylistContainer controller={this.props.controller} />
      </div>
    );
  }
}

export default AppPage;
