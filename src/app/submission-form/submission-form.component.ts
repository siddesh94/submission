import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { constants } from '../../constant/constant';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.scss']
})
export class SubmissionFormComponent implements OnInit, AfterViewInit {
  search: any;
  submissionDt: any;
  submissionData: any;
  form: any;
  status: any;
  toggledItem: any;

  map: any;

  @ViewChild('myDate') myDate !: ElementRef<HTMLElement>;

  constructor() { 
    this.search = "";
    this.submissionDt = "";
  }


  onToggleClick(type: any) {
    this.toggledItem = type;
  }


  export() {

  }

  ngOnInit(): void {
    this.toggledItem = 'map';
    this.submissionData = constants.data?.submission_data;
    this.form = constants.data?.form;
    this.status = constants.data?.status;

    // this.triggerFalseClick();/
  }

  ngAfterViewInit(): void {
    this.loadMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYnJhc2thbSIsImEiOiJja3NqcXBzbWoyZ3ZvMm5ybzA4N2dzaDR6In0.RUAYJFnNgOnn80wXkrV9ZA',
    }).addTo(this.map);

    this.getCurrentPosition()
    .subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);

      const icon = L.icon({
        iconUrl: 'assets/images/location.png',
        // shadowUrl: 'assets/images/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
      marker.addTo(this.map);
    });
  }

}
