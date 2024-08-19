// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-custom-time-chart',
// //   templateUrl: './custom-time-chart.component.html',
// //   styleUrls: ['./custom-time-chart.component.scss']
// // })
// // export class CustomTimeChartComponent {

// // }
// // custom-time-chart.component.ts
// import { Component, Input } from '@angular/core';
// import { NgTimeChartComponent } from '@puzzleitc/ng-time-chart';
// import { DateTime } from 'luxon';
// import { Settings } from 'luxon';

// // import { DateTime } from 'luxon';

// export interface Item {
//   readonly name: string;
//   details?: string;
//   readonly startTime:DateTime;
//   readonly endTime: DateTime;
//   readonly hideDateRangeInHeader?: boolean;
//   dates?: DateTime[];
//   class?: string;
//   onClick?: () => void;
// }

// @Component({
//   selector: 'app-custom-time-chart',
//   template: `
//     <div class="item {{item.class}}"
//          *ngIf="isVisible(item)"
//          [style.left.px]="(getDayOfPeriod(item.startTime) * DAY_WIDTH + SIDEBAR_WIDTH)"
//          [style.minWidth.px]="(getDuration(item) * DAY_WIDTH)"
//          [style.maxWidth.px]="(getDuration(item) * DAY_WIDTH)"
//          [class.open-left]="isNotInPeriod(item.startTime)"
//          [class.open-right]="isNotInPeriod(item.endTime)"
//          (click)="open(item)">
//       <ng-container *ngFor="let day of item.dates">
//         <div class="blockade-day day-width-1"
//              *ngIf="isInPeriod(day)"
//              [style.left.px]="getDaysSince(item.startTime, day) * DAY_WIDTH">
//           &nbsp;
//         </div>
//       </ng-container>
//       <div class="blockade-title">
//         {{item.name}}
//         <ng-container *ngIf="!item.hideDateRangeInHeader">
//           ({{item.startTime}} - {{item.endTime}})
//         </ng-container>
//       </div>
//       <div *ngIf="item.details" class="blockade-details">
//         <!-- Custom HTML logic, e.g., removing the <p> tag -->
//         {{ sanitizeDetails(item.details) }}
//       </div>
//     </div>
//   `,
//   styleUrls: ['./custom-time-chart.component.css']
// })
// export class CustomTimeChartComponent extends NgTimeChartComponent {
//   @Input() item: any; 
//   @Input() period!: Period;
//   // readonly DAY_WIDTH = Constants.DAY_WIDTH;
//   readonly SIDEBAR_WIDTH = Constants.SIDEBAR_WIDTH;

//   // constructor() {
//   //   super(this.groups)
//   // }

//   isVisible(item: Item) {
//     return this.isInPeriod(item.startTime) ||
//       this.isInPeriod(item.endTime) ||
//       new Period(item.startTime, item.endTime).containsDate(this.period.startDate);
//   }

//   isInPeriod(time: DateTime): boolean {
//     return this.period.containsDate(time);
//   }

//   getDayOfPeriod(date: DateTime): number {
//     if (!this.period.containsDate(date)) {
//       return 0;
//     }
//     return Math.floor(date.diff(this.period.startDate, 'days').as('days'));
//   }

//   getDuration(item: Item): number {
//     const startDate = this.getStartDateInCurrentPeriod(item.startTime).startOf('day');
//     const endDate = this.getEndDateCurrentPeriod(item.endTime).endOf('day');
//     return Math.ceil(endDate.diff(startDate, 'days').as('days'));
//   }

//   isNotInPeriod(time: DateTime): boolean {
//     return !this.period.containsDate(time);
//   }

//   // getDaysSince(referenceDate: string | DateTime, date: string | DateTime): number {
//   //   let referenceDT: DateTime;
//   //   if(referenceDate instanceof DateTime){
//   //     referenceDT=referenceDate.set({});
//   //   }else{
//   //     referenceDT = DateTime.fromISO(referenceDate);;
//   //   }
//   //   referenceDT=this.getStartDateInCurrentPeriod(referenceDT).startOf('day');


//   //   let myDT: DateTime;
//   //   if(myDT instanceof DateTime){
//   //     myDT=date.set({});
//   //   }else{
//   //     myDT = DateTime.fromISO(date);
//   //   }
//   //   myDT=this.getStartDateInCurrentPeriod(myDT).startOf('day');

//   //   return Math.ceil(myDT.diff(referenceDT, 'days').as('days'));
//   // }
//   getDaysSince(referenceDate: string | DateTime, date: string | DateTime): number {
//     let referenceDT: DateTime;
  
//     // Handle referenceDate as DateTime or string
//     if (referenceDate instanceof DateTime) {
//       referenceDT = referenceDate.set({});
//     } else {
//       referenceDT = DateTime.fromISO(referenceDate);
//     }
//     referenceDT = this.getStartDateInCurrentPeriod(referenceDT).startOf('day');
  
//     let myDT: DateTime;
  
//     // Handle date as DateTime or string
//     if (date instanceof DateTime) {
//       myDT = date.set({});
//     } else {
//       myDT = DateTime.fromISO(date);
//     }
//     myDT = this.getStartDateInCurrentPeriod(myDT).startOf('day');
  
//     // Calculate the difference in days
//     return Math.ceil(myDT.diff(referenceDT, 'days').as('days'));
//   }


//   open(item: Item) {
//     item.onClick?.apply(null);
//   }

//   private getStartDateInCurrentPeriod(startDate: DateTime): DateTime {
//     if (Period.isBefore(startDate,this.period.startDate)) {
//       return this.period.startDate;
//     }
//     return startDate;
//   }

//   private getEndDateCurrentPeriod(endDate: DateTime): DateTime {
//     if (Period.isAfter(endDate,this.period.endDate)) {
//       return this.period.endDate;
//     }
//     return endDate;
//   }
//   // Optionally override or extend other methods

//   sanitizeDetails(details: string): string {
//     // Implement your sanitization logic here
//     return details.replace(/<\/?p>/g, ''); // Example: Remove <p> tags
//   }
// }

// export class Constants {
//   public static readonly DAY_WIDTH = 20;
//   public static readonly SIDEBAR_WIDTH = 200;
// }

// // import { DateTime } from 'luxon';
// export class Period {

//   private readonly _startDate: DateTime;
//   private readonly _endDate: DateTime;

//   private static splitAtNewYear(period: Period): Period[] {
//     const periods: Period[] = [];
//     if (period.endDate.year > period.startDate.year) {
//       periods.push(new Period(period.startDate.set({}), DateTime.fromISO(`${period.startDate.year}-12-31`)));
//       periods.push(...Period.splitAtNewYear(new Period(DateTime.fromISO(`${period.endDate.year}-01-01`), period.endDate.set({}))));
//     } else {
//       periods.push(period);
//     }
//     return periods;
//   }

//   constructor(startDate: DateTime, endDate: DateTime) {
//     this._startDate = startDate?.set({});
//     this._endDate = endDate?.set({});
//   }

//   static forYear(year: number): Period {
//     const midYear = DateTime.fromISO(`${year}-06-01`);
//     return new Period(midYear.set({}).startOf('year'), midYear.set({}).endOf('year'));
//   }

//   get startDate(): DateTime {
//     return this._startDate;
//   }

//   get endDate(): DateTime {
//     return this._endDate;
//   }

//   get days(): number {
//     return Math.ceil(this.endDate.diff(this.startDate, 'days').as('days'));
//   }

//   get isoWeeks(): number {

//     function countThursdays(period: Period) {
//       let count = 0;
//       let startDay = period.startDate.set({}).set({ weekday: 4 });
//       if (Period.isBefore(startDay,period.startDate)) {
//         startDay=startDay.plus({ days: 7 });
//       }
//       if (period.days >= 4) {
//         while (Period.isSameOrBeforeDay(startDay,period.endDate)) {
//           count++;
//           startDay=startDay.plus({ days: 7 });
//         }
//       }
//       return count;
//     }

//     const periods = Period.splitAtNewYear(this);
//     return periods.map(p => countThursdays(p))
//       .reduceRight((previousValue, currentValue) => previousValue + currentValue);
//   }

//   public isValid(): boolean {
//     if(this._endDate instanceof DateTime && this._startDate instanceof DateTime){
//       return !!this._startDate && !!this._endDate && this._startDate.toMillis() < this._endDate.toMillis()
//     }else{
//       return false;
//     }
//   }

//   public containsDate(date: DateTime): boolean {
//     return Period.isSameOrAfter(date,this.startDate) && Period.isSameOrBefore(date,this.endDate);
//   }

//   public toString() {
//     return `Period (${this.startDate} - ${this.endDate})`;
//   }

//   public overlaps(period: Period): boolean {
//     return !!this.intersect(period);
//   }

//   intersect(period: Period): Period | null {
//     const latestStart = DateTime.max(this.startDate, period.startDate);
//     const earliestEnd = DateTime.min(this.endDate, period.endDate);
//     if (!latestStart || !earliestEnd) {
//       return null;
//     }
//     if (Period.isAfter(latestStart,earliestEnd)) {
//       return null;
//     }
//     return new Period(latestStart, earliestEnd);
//   }

//   public equals(period: Period) {
//     return Period.isSame(this.startDate,period.startDate) && Period.isSame(this.endDate,period.endDate)
//   }


//   public static isSameDay(first:DateTime,second:DateTime):boolean{
//     return DateTime.fromISO(first.toISODate() as string).toMillis()==DateTime.fromISO(second.toISODate() as string).toMillis();
//   }
//   public static isSameOrBeforeDay(first:DateTime,second:DateTime):boolean{
//     return DateTime.fromISO(first.toISODate() as string).toMillis()<=DateTime.fromISO(second.toISODate() as string).toMillis();
//   }
//   public static isSameOrBefore(first:DateTime,second:DateTime):boolean{
//     return first.toMillis()<=second.toMillis();
//   }
//   public static isSameOrAfter(first:DateTime,second:DateTime):boolean{
//     return first.toMillis()>=second.toMillis();
//   }
//   public static isSame(first:DateTime,second:DateTime):boolean{
//     return first.toMillis()==second.toMillis();
//   }
//   public static isBefore(first:DateTime,second:DateTime):boolean{
//     return first.toMillis()<second.toMillis();
//   }
//   public static isAfter(first:DateTime,second:DateTime):boolean{
//     return first.toMillis()>second.toMillis();
//   }
// }