import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
}) 
export class ServerComponent {
    serverId: number = 10; //data type not required
    serverStatus: string = 'offline'; //data type not required

    getServerId() {
        return this.serverId;
    }

    getServerStatus() {
        return this.serverStatus;
    }
}