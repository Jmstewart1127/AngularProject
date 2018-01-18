import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { TimeClockComponent } from './time-clock/time-clock.component';
import { LoginComponent } from './login/login.component';
import { BusinessComponent } from './business/business.component';
import { BusinessEmployeesComponent } from './business-employees/business-employees.component';
import { LoginFormComponent } from './login-form/login-form.component';

const appRoutes: Routes = [
  { path: 'employees', component: TableComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'employees/:businessId', component: BusinessEmployeesComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    TableComponent,
    UserComponent,
    TimeClockComponent,
    LoginComponent,
    BusinessComponent,
    BusinessEmployeesComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
