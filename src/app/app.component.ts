import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverName : string = "";
    appServerStatus : boolean = false;
    serverCreationStatus : string = "No Sever created at a time!";
    constructor(){
      setInterval(()=>{
        this.appServerStatus = !this.appServerStatus
      },5000)
    }

    onServerChange(){
       this.serverCreationStatus = "Server was created!"
    }

    onServerUpdate(event : Event){
       this.serverName = (<HTMLInputElement>event.target).value;
    }

}
