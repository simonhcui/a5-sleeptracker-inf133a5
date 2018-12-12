import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

//import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-first',
  templateUrl: 'first.page.html',
  styleUrls: ['first.page.scss'],
})
export class FirstPage implements OnInit {

  startTime:Date;
  endTime:Date;
  service;
  myfirebase:FirebaseService;
  
  //collection:AngularFirestoreCollection;
  //testItems: Observable<any[]>;

//  constructor(private menu: MenuController, public sleepService:SleepService, db:AngularFirestore) {
    constructor(private menu: MenuController, public sleepService:SleepService,
      firebase:FirebaseService) {
      this.service = new SleepService();
      this.myfirebase = firebase;
    
//    this.collection = db.collection('test-collection');
//    this.testItems = db.collection('test-collection').valueChanges();
//    this.collection = db.collection('users');
//    this.testItems = db.collection('users').valueChanges();
}

  ngOnInit() {
		console.log(this.allSleepData);
	}
	
	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
  
  openMenu(){
    this.menu.open();
  }
  
  btnClicked(){
    //var temp = this.startTime.split("T");
    //console.log(temp);
    //console.log(temp[0]);
    //console.log(temp[1].substring(0,8));
    //console.log(temp[0].toLocaleDateString('en-US', { month:, 'long', day: 'numeric', year: 'numeric'});

    //this.myfirebase.getSleepLogs();
	  let newDate1 = new Date(this.startTime);
	  let newDate2 = new Date(this.endTime);
	  
	  
	  //var s = new OvernightSleepData(this.startTime, this.endTime);
	  var s = new OvernightSleepData(newDate1, newDate2);
    this.myfirebase.addOvernightSleepDataLog(s);
	  //this.service.logOvernightData(s);
	  	  
	  //let newDate = new Date(this.startTime);
	  //console.log(newDate);
	}

}
