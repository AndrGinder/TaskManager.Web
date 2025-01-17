import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './modules/startpage/startpage.component';
import { TaskRoutingModule } from './modules/task/task-routing.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
