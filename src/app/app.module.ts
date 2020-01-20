import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SortByPipe} from './../directive/sort-by.pipe';
import {dataSizePipe} from '../directive/data-size.pipe';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import {ProductService} from './../service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SortByPipe,
    dataSizePipe,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
