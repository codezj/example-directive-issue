import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component';
// import { ChildComponent } from './child.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './components/app.component';
// import { PaAttrDirective } from './attr.directive';
// import { paModel } from './twoway.directive';
// import { PaStructureDirective } from './structure.directive';
// import { PaIteratorDirective } from './iterator.directive';
// import { PaCellColor } from './cellColor.directive';
// import { PaCellColorSwitcher } from './cellColorSwitcher.directive';

import { ProductTableComponent } from './components/productTable.component';
import { ProductFormComponent } from './components/productForm.component';
import { PaToggleView } from './components/toggleView.component';
// import { PaAddTaxPipe } from './addTax.pipe';
// import { PaCategoryFileterPipe } from './categoryFilter.pipe';

import {LOCALE_ID} from "@angular/core"
import localeFr from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common'
// import {PaDiscountDisplayComponent} from './discountDisplay.component'
// import {PaDiscountEditorComponent} from './discountEditor.component'
// import {DiscountService} from "./discount.service"
// import {PaDiscountPipe} from "./discount.pipe"

// import {PaDiscountAmountDirective} from "./discountAmount.directive"
// import {SimpleDataSource} from "./datasource.model"
// import {Model} from "./repository.model"
// import {LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL} from "./log.service"

// import {VALUE_SERVICE, PaDisplayValueDirective} from "./valueDisplay.directive"

import {ModelModule} from "./model/model.module"
import {CommonCModule} from "./common/common.module"
import { ComponentsModule } from './components/components.module';

import { LogLevel } from './log.services';


// let logger = new LogService();
// logger.minimumLevel = LogLevel.DEBUG;

// registerLocaleData(localeFr);

@NgModule({
  declarations: [ 
    ProductComponent,
    // ChildComponent,
    // AppComponent,
    // PaAttrDirective,
    // paModel,
    // PaStructureDirective,
    // PaIteratorDirective,
    // PaCellColor,
    // PaCellColorSwitcher,
    // ProductTableComponent,
    // ProductFormComponent,
    PaToggleView,
    // PaAddTaxPipe,
    // PaCategoryFileterPipe,
    // PaDiscountDisplayComponent,
    // PaDiscountEditorComponent,
    // PaDiscountPipe,
    // PaDiscountAmountDirective,
    // PaDisplayValueDirective,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonCModule,
    ComponentsModule,

  ],
  // providers: [{provide: LogLevel, useValue: LogLevel.ERROR}],
  // providers: [DiscountService,SimpleDataSource,Model,LogService],
  // providers: [DiscountService,LogService,
    // {provide: LOG_SERVICE, useClass: LogService, multi: true},
    // {provide: LOG_SERVICE, useClass: SpecialLogService, multi: true},
    // {provide: LogService, useValue: logger},
    // {
    //   provide: LogService, useFactory: () => {
    //     let logger = new LogService();
    //     logger.minimumLevel = LogLevel.DEBUG;
    //     return logger;
    //   }
    // }V
    // {provide:LOG_LEVEL, useValue: LogLevel.DEBUG},
    // {provide: "debugLevel", useExisting: LOG_LEVEL},
    // {provide: LogService,
    // deps: ["debugLevel"],
    // useFactory: (level: any) =>{
    //   let logger = new LogService();
    //   logger.minimumLevel = level;
    //   return logger;
    // }},

    // {provide: VALUE_SERVICE, useValue: "Apples"}
  // ],
  
  bootstrap: [
    // AppComponent
    // ProductComponent,
    // [ProductFormComponent, ProductTableComponent]
    [ProductComponent]


  ]
})
export class AppModule { }
