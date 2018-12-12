import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.page.html',
  styleUrls: ['./fourth.page.scss'],
})
export class FourthPage implements OnInit {

  sData1:OvernightSleepData[];
  textOvernight:string;
  
  sStrings:string[];
  service:SleepService;
  myfirebase:FirebaseService;
  testItems: Observable<any[]>;
  tdata:OvernightSleepData;

  constructor(private menu: MenuController, public sleepService:SleepService,
    firebase:FirebaseService) {
    this.service = new SleepService();
    this.myfirebase = firebase;
  }

  ngOnInit() {
		console.log(this.allSleepData);
	}
	
	get allSleepData() {
		return SleepService.AllSleepData;
	}

  get allOvernightData(){
    return SleepService.AllOvernightData;
  }
  
  btnClicked1(){
//    this.sData1 = this.allOvernightData;
    this.sData1 = [];
    this.sStrings = [];

    this.textOvernight = "";

    this.testItems = this.myfirebase.getOvernightSleepDataLogs();

    /*this.testItems.subscribe( data => 
      {
        for (var i = 0; i < data.length; i++)
        {

          console.log("===================");
          console.log(i);
          console.log(data[i]['loggedAt']);
          console.log(data[i]['sleepEnd']);
          console.log(data[i]['sleepStart']);
          console.log("===================");
          this.tdata = new OvernightSleepData(data[i]['loggedAt'],
            data[i]['sleepStart'],data[i]['sleepEnd']);
          this.sData1.push(this.tdata);
          }
      }
      );
console.log("ooo");
console.log(this.sData1);
    for(let i = 0; i < this.sData1.length; i++){
      
      this.sStrings.push(this.sData1[i].dateString());
      this.sStrings.push(this.sData1[i].summaryString());
    }*/
  }

}
