import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = 'TestServer';
    serverCreated = false;
    servers = ['TestServer', 'TestServer2']; 

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

  ngOnInit() {
    }

  onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName); //pushing the serverName to make a server
      this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;//passing the servers name.
  }

  onUpdateServerName(event: Event) {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
