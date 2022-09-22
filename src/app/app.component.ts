import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedRoute: any;

  title = 'app-submissions';

  changeRoute(route: any) {
    this.selectedRoute = route;
  }

  ngOnInit(): void {
    this.selectedRoute = 'submission';

    // this.triggerFalseClick();/
  }
}
