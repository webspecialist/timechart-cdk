import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTimeChartModule } from '@puzzleitc/ng-time-chart';
import { TableOverlayComponent } from './table-overlay/table-overlay.component';
// import { ClickEventDirective } from './click-event-directive.directive';
// import { CustomTimeChartComponent } from './custom-time-chart/custom-time-chart.component';
import { CustomTimeChartWrapperComponent } from './custom-time-chart-wrapper/custom-time-chart-wrapper.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    TableOverlayComponent,
    // ClickEventDirective,
    // CustomTimeChartComponent,
    CustomTimeChartWrapperComponent
  ],
  imports: [
    BrowserModule,
    NgTimeChartModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
