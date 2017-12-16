import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  results: Object[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://spring-clock.herokuapp.com/rest/employees/2')
      .subscribe(data => {
        this.results = data['0'];
        console.log(data);
        console.log(this.results);
        console.log(data['0'].user);
      });
  }

}
