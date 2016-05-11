import { EventData, Observable} from "data/observable";
import {ObservableArray} from "data/observable-array";
import { Page } from "ui/page";
var mapsModule = require("nativescript-google-maps-sdk");

// Event handler for Page "navigatingTo" event attached in main-page.xml

export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var array = new ObservableArray();
    
    array.push({
        title: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://lorempixel.com/200/100/'
    });
    array.push({
        title: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://lorempixel.com/200/100/'
    });
    array.push({
        title: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://lorempixel.com/200/100/'
    });
    
    var observable = new Observable({source: array});
    observable.set("latitude", -33.86);
        observable.set("longitude", 151.20);
        observable.set("zoom", 8);
        observable.set("bearing", 0);
        observable.set("tilt", 0);
        observable.set("padding", [40, 40, 40, 40]);
    page.bindingContext = observable;
}

export function OnMapReady(args) {
  var mapView = args.object;
 
  console.log("Setting a marker...");
  var marker = new mapsModule.Marker();
  marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
  marker.title = "Sydney";
  marker.snippet = "Australia";
  marker.userData = { index : 1};
  mapView.addMarker(marker);
}
 
export function onMarkerSelect(args) {
   console.log("Clicked on " +args.marker.title);
}
 
export function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera)); 
}