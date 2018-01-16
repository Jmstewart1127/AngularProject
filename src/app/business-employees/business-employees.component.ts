import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-employees',
  templateUrl: './business-employees.component.html',
  styleUrls: ['./business-employees.component.css']
})
export class BusinessEmployeesComponent implements OnInit {
  private sub: any;
  employeeData: any;
  businessId: number;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.businessId = +params['businessId'];
      this.getEmployeeDataByBusinessId(this.businessId);
    });
  }

  getEmployeeDataByBusinessId(businessId): void {
    this.http.get('https://spring-clock.herokuapp.com/rest/employees/' + businessId)
      .subscribe(data => {
        this.employeeData = data;
      });
  }

}
