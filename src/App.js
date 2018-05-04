import React, { Component } from "react";
import { Marker } from "./components";
const locations = [
  { lat: -25.363, lng: 131.044, title: "hello" },
  { lat: 28.7041, lng: 77.1025, title: "Delhi" }
];

class App extends Component {
  onDropMarker = e => {
    console.log(e.latLng.lat());
  };
  render() {
    return (
      <Marker
        apikey="AIzaSyByh4tOU8SZW4kxfoeCLh0kG9sMKKIHhqY"
        zoom={2}
        center={{ lat: -28.024, lng: 140.887 }}
        locations={locations}
        height={500}
        draggable={true}
        onDropMarker={this.onDropMarker}
      />
    );
  }
}

export default App;
