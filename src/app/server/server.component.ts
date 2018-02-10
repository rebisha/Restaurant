import { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
    color: white; }    
`]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: String = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
        //this is how u define the if else statement 
        //'online' ? 'green' simply means if serverStatus is online then the color should be green
        //here ? is then
        //to write the else statement use :
        //so [: 'red' means if serverStatus is offline use red color]
    }
}