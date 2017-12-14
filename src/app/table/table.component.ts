import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  results: string[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://spring-clock.herokuapp.com/rest/employees/2')
      .subscribe(data => {
        this.results = data['results'];
        console.log(this.results['0']);
      });
  }

}
