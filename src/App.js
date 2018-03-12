import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    window.initMap = this.initMap;
    var script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyByh4tOU8SZW4kxfoeCLh0kG9sMKKIHhqY&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
  }

  initMap() {
    new window.google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: -28.024, lng: 140.887 }
    });
  }
  render() {
    return <div id="map" style={{ height: "500px", width: "500px" }} />;
  }
}

export default App;
