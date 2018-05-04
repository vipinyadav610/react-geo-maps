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
    const { zoom, center, locations, draggable, onDropMarker } = this.props;
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom,
      center
    });
    let marker;
    if (Array.isArray(locations))
      for (let location of locations) {
        marker = new window.google.maps.Marker({
          map: map,
          draggable,
          position: location,
          title: location.title
        });
        if (draggable) {
          marker.addListener("dragend", onDropMarker);
        }
      }
    else {
      marker = new window.google.maps.Marker({
        map: map,
        draggable,
        position: locations,
        title: locations.title
      });
      if (draggable) {
        marker.addListener("dragend", onDropMarker);
      }
    }
  };
  render() {
    const { height, width } = this.props;
    return (
      <div
        id="map"
        style={{ height: `${height}px`, width: width ? `${width}` : "100%" }}
      />
    );
  }
}

export default Marker;
