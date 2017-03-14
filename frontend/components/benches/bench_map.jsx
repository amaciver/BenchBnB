import React from 'react';
import MarkerManager from '../../util/marker_manager.js';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
        // debugger;
      this.props.updateFilter("bounds", bounds);
    });
  }

  componentDidMount() {
   // set the map to show SF
   const mapOptions = {
     center: { lat: 37.7758, lng: -122.435 }, // this is SF
     zoom: 13
   };

   // wrap the mapDOMNode in a Google Map
   this.map = new google.maps.Map(this.mapNode, mapOptions);
   this.MarkerManager = new MarkerManager(this.map);

   let benches = [];
   if (this.props.benches) {
     benches = Object.keys(this.props.benches).map( id => this.props.benches[id]);
   }
   this._registerListeners();
   this.MarkerManager.updateMarkers(benches);

 }

 componentDidUpdate() {
   let benches = [];
   if (this.props.benches) {
     benches = Object.keys(this.props.benches).map( id => this.props.benches[id]);
   }
   this.MarkerManager.updateMarkers(benches);

 }

  render() {

    return(
      <div id="map-container" ref={ map => this.mapNode = map }>


      </div>
    );

  }
}

export default BenchMap;
