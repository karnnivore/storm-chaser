import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})




export class MapComponent implements OnInit {
  constructor() {
    
  }
  center: google.maps.LatLngLiteral = {lat:30, lng: 30}
  circleCenter: google.maps.LatLngLiteral = {lat: 30, lng: 30}
  radius = 3
  
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        // lat: position.coords.latitude + 1.458,
        // lng: position.coords.longitude + 1
        lat: 43.15636380842052,
        lng: -77.60472774000483
      }
      this.circleCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }

  zoom = 20
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  
}
