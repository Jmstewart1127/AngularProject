import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  // selector: '[app-servers]', = <div app-servers></div>
  // selector: '.app-servers', = <div class="app-servers"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000) 
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}
