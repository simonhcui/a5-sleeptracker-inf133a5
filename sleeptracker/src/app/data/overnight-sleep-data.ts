import { SleepData } from './sleep-data';
import { setupRouter } from '@angular/router/src/router_module';

export class OvernightSleepData extends SleepData {
//	private sleepStart:Date;
//	private sleepEnd:Date;
	sleepStart:Date;
	sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	/*
	constructor(loggedAt:Date, sleepStart:Date, sleepEnd:Date) {
		super();
		this.loggedAt = loggedAt;
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}*/

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
