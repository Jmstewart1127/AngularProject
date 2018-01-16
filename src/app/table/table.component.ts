import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {promise} from 'selenium-webdriver';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  results: Object[];
  fullData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData(): void {
    this.http.get('https://spring-clock.herokuapp.com/rest/employees/2')
      .subscribe(data => {
        this.fullData = data;
      });
  }

  clockEmployeeInOrOut(employeeId): void {
    this.http.get('https://spring-clock.herokuapp.com/rest/web/clock/in/out/' + employeeId)
      .subscribe(data => {
        this.results = data['0'];
      });
    setTimeout(() => this.getEmployeeData(), 200);
  }

}
