import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SavingsDepositService } from './services/savings-deposit.service';

import { Component } from '@angular/core';

function log(target, name, descriptor){
    console.log(target,name,descriptor)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations:[
   AppComponent
  ],
  imports :[
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers:[
    AppComponent
  ],
  bootstrap : [
    AppComponent
  ]
})
export class AppComponent {
   sd = [];

  constructor(private mySavingsDeposit : SavingsDepositService){

  }

  ngOnInit() {
   this.mySavingsDeposit.getData()
    .subscribe((Response:any)=>{
      console.log("I got the data!", Response);
      this.sd = Response.data;
      console.log(this.sd);
    });
  }

}

