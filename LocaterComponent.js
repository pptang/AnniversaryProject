import React, { Component } from 'react';
import { View } from 'react-native';
import MemoryModal from './MemoryModal.js';
import storyList from './StoryList.js';
var watchID;

/** http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula **/
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


export default class LocaterComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentPlaceIndex: 0
    };
  }

  checkTargetPlaces(currentLat, currentLon) {
    console.log("checkTargetPlaces");

    for (var i = 0; i < storyList.length; i++) {
      var story = storyList[i];
      var distance = getDistanceFromLatLonInKm(currentLat, currentLon, story.lat, story.lon);
      console.log("distance::" + distance);
      if (distance < 0.15) {
        this.onArrive(i);
        break;
      } else {
        console.log(story.title + "story more than 0.15 km");
      }
    }


  }
  onArrive(index) {
    this.setState({currentPlaceIndex: index, modalVisible: true})
  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("==== get Current Position::" + JSON.stringify(position));
        this.checkTargetPlaces(position.coords.latitude, position.coords.longitude);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    watchID = navigator.geolocation.watchPosition((position) => {
      console.log("==== Position Changed" + JSON.stringify(position));
      this.checkTargetPlaces(position.coords.latitude, position.coords.longitude);

    });

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(watchID);
  }


  render() {
    return (
        <View>

          <MemoryModal
            modalVisible={this.state.modalVisible}
            storyIndex={this.state.currentPlaceIndex}
            closeModal={() => this.setState({...this.state, modalVisible: false})}

            nextChallenge={() => {

              this.setState({
                modalVisible: false,
                currentPlaceIndex: this.state.currentPlaceIndex + 1
              });

            }}
          />

        </View>
    );
  }
}
