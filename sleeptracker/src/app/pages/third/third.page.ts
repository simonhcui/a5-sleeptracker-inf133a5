import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-third',
  templateUrl: 'third.page.html',
  styleUrls: ['third.page.scss'],
})
export class ThirdPage implements OnInit {

  score:number;
  service:SleepService;
  
  sData1:OvernightSleepData[];
  sData2:StanfordSleepinessData[];
  summarySleepiness:string;
  sStrings:string[];
  
  textOvernight:string;
  
  firstSleepiness:string;
  firstDate:string;
  tempDate:string;
  
  textSleepiness:string;
  myfirebase:FirebaseService;
  testItems: Observable<any[]>;

  constructor(private menu: MenuController, public sleepService:SleepService,
    firebase:FirebaseService) {
          this.service = new SleepService();
          this.myfirebase = firebase;
        }

  ngOnInit() {
		console.log(this.allSleepData);
	}
	
	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

  get allOvernightData(){
    return SleepService.AllOvernightData;
  }

  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }
	
	openMenu(){
    this.menu.open();
  }

  
  btnClicked1(){
    this.sData1 = this.allOvernightData;
    
    this.textOvernight = "";
    
    for(let i = 0; i < this.sData1.length; i++){
      this.textOvernight += this.sData1[i].dateString();
      this.textOvernight += "\n";
    }
  }
  
  
  btnClicked2(){
  
    this.sData2 = this.allSleepinessData;
    this.textSleepiness = "";
    this.sStrings = [];
   
    this.testItems = this.myfirebase.getStanfordSleepDataLogs();
//    console.log(this.sData2);
/*    this.testItems = this.myfirebase.getSleepLogs();

    this.testItems.subscribe( data => 
      {
        for (var i = 0; i < data.length; i++)
        {
          console.log("===================");
          console.log(i);
          console.log("===================");
          }
      }
      );
*/
//    this.firstDate = "At " + this.sData2[0].summaryDate();
//    this.firstSleepiness = '<br>' + this.sData2[0].summaryString();
//    this.sStrings[0] = this.sData2[0].summaryString();
    
    for(let i = 0; i < this.sData2.length; i++){

      //this.tempDate = this.sData2[i].summaryDate();
      //this.sStrings[i] = this.sData2[i].summaryString();
      
      this.sStrings.push(this.sData2[i].summaryDate());
      this.sStrings.push(this.sData2[i].summaryString());
      
      //this.sStrings[i] = this.sData2[i];

    }
//    for(let i = 0; i < this.sData2.length; i++){
//      console.log(this.sStrings[i] );
//    }

	  
	}

}
