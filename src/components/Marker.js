import React, { Component } from "react";

class Marker extends Component {
  componentDidMount() {
    window.initMap = this.initMap;
    const { apikey } = this.props;
    var script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);
  }

  initMap = () => {
    const { zoom, center, locations } = this.props;
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom,
      center
    });
    for (let location of locations) {
      new window.google.maps.Marker({
        map: map,
        position: location,
        title: location.title
      });
    }
  };
  render() {
    const { height, width } = this.props;
    return (
      <div id="map" style={{ height: `${height}px`, width: `${width}px` }} />
    );
  }
}

export default Marker;
