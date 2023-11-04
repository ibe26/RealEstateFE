import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
public loadingString="";
  ngOnInit(){
    let interval=0;
    setInterval(()=>{
      switch (interval%3) {
        case 0:
          console.log(interval)
          this.loadingString="Loading.";
          break;

        case 1:
          this.loadingString="Loading..";
          break;

        case 2:
          this.loadingString="Loading...";
          break;

        default:
          break;
      }
    interval++;

    },500)
  }
}
