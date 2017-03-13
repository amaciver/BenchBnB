
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


  updateMarkers(benches) {
    this.benches = benches;
    console.log("time to update");
    this._benchesToAdd().forEach ( bench => this._createMarkerFromBench(bench));
  }
}
