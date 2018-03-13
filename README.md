# React Google map

A React component to integrate Google Maps on your website

### Installation

To install the stable version

```sh
yarn add google-map123
```

or

```sh
npm install google-map123 --save
```

Google Maps marker is imported as

```js
import { Marker } from "google-map123";
```

Create your component

```js
import React, { Component } from "react";
import { Marker } from "google-map123";
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

| Prop                                                    |   Type   |      Required      | Description                                                                                  |
| ------------------------------------------------------- | :------: | :----------------: | -------------------------------------------------------------------------------------------- |
| [`inputProps`](#inputProps)                             |  object  | :white_check_mark: | Arbitrary props to input element, `value` and `onChange` are required keys                   |
| [`renderSuggestion`](#renderSuggestion)                 | function |                    | Functional react component to render dropdown list item                                      |
| [`renderFooter`](#renderFooter)                         | function |                    | Functional react component to render footer at the bottom of the dropdown list               |
| [`classNames`](#classNames)                             |  object  |                    | Pass CSS classes to rendered elements                                                        |
| [`styles`](#styles)                                     |  object  |                    | Pass CSS styles to rendered elements                                                         |
| [`onSelect`](#onSelect)                                 | function |                    | Event handler to handle user's select event                                                  |
| [`onEnterKeyDown`](#onEnterKeyDown)                     | function |                    | Event handler that gets called when user presses Enter key while input is focused            |
| [`onError`](#onError)                                   | function |                    | Error handler function that gets called when Google Maps API responds with an error          |
| [`options`](#options)                                   |  object  |                    | Options to Google Maps API (i.e. bounds, radius)                                             |
| [`debounce`](#debounce)                                 |  number  |                    | Number of milliseconds to delay before making a call to Google Maps API                      |
| [`highlightFirstSuggestion`](#highlightFirstSuggestion) | boolean  |                    | If set to `true`, first list item in the dropdown will be automatically highlighted          |
| [`shouldFetchSuggestions`](#shouldFetchSuggestions)     | function |                    | Component will fetch suggestions from Google Maps API only when this function returns `true` |
