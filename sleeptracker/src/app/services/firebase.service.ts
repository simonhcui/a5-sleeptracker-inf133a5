import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { SleepData } from '../data/sleep-data';
import { Observable } from 'rxjs';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionOvernight:AngularFirestoreCollection;
  testItemsOvernight: Observable<any[]>;
  collectionStanford:AngularFirestoreCollection;
  testItemsStanford: Observable<any[]>;
  mysleep:SleepData[];
  myovernightSleepData:OvernightSleepData[];

  constructor(db:AngularFirestore) {
    this.collectionOvernight = db.collection('OvernightSleepData');
    this.collectionStanford = db.collection('StanfordSleepinessData');
    
    this.testItemsOvernight = this.collectionOvernight.valueChanges();
    this.testItemsStanford = this.collectionStanford.valueChanges();
//      this.testItems = db.collection('users').valueChanges();
//      console.log("testtttttttttttt");
    //console.log(this.testItems);
//    this.testItems.subscribe(data => console.log(data) )
//    console.log("aaaaaaaaaaaaaaa");
  }

  addOvernightSleepDataLog(overnightSleepData:OvernightSleepData) {
    console.log(overnightSleepData);
    this.collectionOvernight.add({
      dateString: overnightSleepData.dateString(),
      summaryString: overnightSleepData.summaryString()
    })
    .then((reference) => {
      console.log("Reference to added data, kind of like a URL");
      console.log(reference);
      });
      //TODO: implement this function to add sleep logs
  }

  addStanfordSleepinessData(stanfordSleepinessData:StanfordSleepinessData) {
    console.log(stanfordSleepinessData);
    this.collectionStanford.add({
      dateString: stanfordSleepinessData.dateString(),
      summaryString: stanfordSleepinessData.summaryString()
    })
    .then((reference) => {
      console.log("Reference to added data, kind of like a URL");
      console.log(reference);
      });
      //TODO: implement this function to add sleep logs
  }

  addSleepLog(sleepLog:SleepData) {
      //TODO: implement this function to add sleep logs
  }

  addData(data:{}) {
    }

  getOvernightSleepDataLogs():Observable<DocumentData[]> {
/*
    this.testItems.toPromise().then( data =>
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
      return this.testItemsOvernight;

    }
    getStanfordSleepDataLogs():Observable<DocumentData[]> {
      return this.testItemsStanford;
      
    }
      
}
