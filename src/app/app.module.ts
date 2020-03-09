import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'

import { NglModule } from 'ng-lightning';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CurrencyOperationsService } from './services/currency-operations.service';
import { CurrencyRequestService } from './services/currency-request.service';
import { updateCurrencyData } from './store/currency-converter.reducer';

import { CxSelectComponent } from './components/cx-select/cx-select.component';
import { CxInputComponent } from './components/cx-input/cx-input.component';
import { CurrencyConverterFormComponent } from './currency-converter-form/currency-converter-form.component'

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterFormComponent,
    CxSelectComponent,
    CxInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NglModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({currencyconverter: updateCurrencyData})
  ],
  providers: [CurrencyOperationsService,CurrencyRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
