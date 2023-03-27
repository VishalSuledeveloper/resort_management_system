import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resort';

  // constructor(private service: AppServiceService){

  // }

  showHead: boolean = false;
  service: any;

  ngOnInit() {
    // this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.service.getData().subscribe((response: any) =>{
      console.log("Response from API is", response)
    },(error: any)=>{
      console.log('Error is', error)
    })
  }
  // constructor(private service: AppServiceService){}





  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if ((event['url'] == '/login') ||(event['url'] == '/admin')) {
            this.showHead = false;
          } else {
            console.log("NU")
            this.showHead = true;
          }
        }
      });
    }
}
