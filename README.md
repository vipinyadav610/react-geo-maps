# React Google map

A React component to integrate Google Maps

### Installation

To install the stable version

```sh
yarn add react-geo-maps
```

or

```sh
npm install react-geo-maps --save
```

Google Maps marker is imported as

```js
import { Marker } from "react-geo-maps";
```

Create your component

```js
import React, { Component } from "react";
import { Marker } from "react-geo-maps";
const locations = [
  { lat: -25.363, lng: 131.044, title: "Australia" },
  { lat: 28.7041, lng: 77.1025, title: "Delhi" }
];

class App extends Component {
  render() {
    return (
      <Marker
        apikey="YOUR_API_KEY"
        zoom={2}
        center={{ lat: -28.024, lng: 140.887 }}
        locations={locations}
        height={500}
        width={500}
      />
    );
  }
}

export default App;
```

## Props

| Prop          |  Type  |      Required      | Description                |
| ------------- | :----: | :----------------: | -------------------------- |
| [`apikey`]    | string | :white_check_mark: | Your `Google Maps API` Key |
| [`zoom`]      | number | :white_check_mark: | Set the map zoom level     |
| [`center`]    | object | :white_check_mark: | Default Center             |
| [`locations`] | array or object  | :white_check_mark: | Multiple Location          |
| [`width`]     | number |                    | Width of map               |
| [`height`]    | number | :white_check_mark: | Height of map              |
| [`draggable`]    | boolean |  | dragable marker   |
| [`onDropMarker`]    | function |  | onDropMarker marker event   |
