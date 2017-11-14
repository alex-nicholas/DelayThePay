import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatStepperModule,
  MatSelectModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class ThemeModule { }
