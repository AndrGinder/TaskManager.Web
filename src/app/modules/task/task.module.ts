import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/page.component';
import { TaskObjectComponent } from './object/object.component';
import { TaskService } from 'src/app/services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './list/list.component';

@NgModule({
  declarations: [
    TaskPageComponent,
    TaskObjectComponent,
    TaskListComponent,
  ],
  imports: [
    
    //external
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    //internal
    TaskRoutingModule,
  ],
  exports:[
    TaskPageComponent,
  ],
  providers: [
    TaskService,
  ],
})
export class TaskModule { }
