
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  _benchesToAdd() {
    const currentBenches = this.markers.map( marker => marker.benchId);
    return this.benches.filter( bench => !currentBenches.includes(bench.id));
  }

  _createMarkerFromBench(bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.long},
      map: this.map,
      benchId: bench.id
    });
    this.markers.push(marker);
  }

  _markersToRemove() {
    const benchIds = this.benches.map( bench => bench.id);
    return this.markers.filter( marker => !benchIds.includes(marker.benchId));
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }


  updateMarkers(benches) {
    this.benches = benches;
    this._benchesToAdd().forEach ( bench => this._createMarkerFromBench(bench));
    this._markersToRemove().forEach ( marker => this._removeMarker(marker));
  }
}
