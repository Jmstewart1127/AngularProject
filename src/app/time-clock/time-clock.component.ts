import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-clock',
  templateUrl: './time-clock.component.html',
  styleUrls: ['./time-clock.component.css']
})
export class TimeClockComponent implements OnInit {
  constructor(private http: HttpClient) { }
  @Input() employeeId: number;
  results: any;
  ngOnInit() {
  }

  clockInAndOut() {
    this.http.get('https://spring-clock.herokuapp.com/rest/web/clock/in/out/' + this.employeeId)
    .subscribe(data => {
      this.results = data['0'];
    });
  }

}
