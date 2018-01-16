import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businesses: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBusinessData();
  }

  getBusinessData(): void {
    this.http.get('https://spring-clock.herokuapp.com/rest/user/2/businesses')
      .subscribe(data => {
        this.businesses = data;
      });
  }

}
