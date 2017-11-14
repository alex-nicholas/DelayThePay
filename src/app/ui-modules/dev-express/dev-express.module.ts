import { NgModule } from '@angular/core';
import {
  DxDataGridModule, 
  DxSchedulerModule,
  DxListModule,
  DxContextMenuModule,
  DxChartModule,
  DxDateBoxModule,
  DxCalendarModule,
  DxValidatorModule,
  DxValidationSummaryModule,
} from 'devextreme-angular';

@NgModule({
  imports: [
    DxDataGridModule, 
    DxSchedulerModule,
    DxListModule,
    DxContextMenuModule,
    DxChartModule,
    DxDateBoxModule,
    DxCalendarModule,
    DxValidatorModule,
    DxValidationSummaryModule,
  ],
  exports: [
    DxDataGridModule, 
    DxSchedulerModule,
    DxListModule,
    DxContextMenuModule,
    DxChartModule,
    DxDateBoxModule,
    DxCalendarModule,
    DxValidatorModule,
    DxValidationSummaryModule,
  ],
  declarations: []
})
export class DevExpressModule { }
