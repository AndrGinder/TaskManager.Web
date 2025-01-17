import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from './page/page.component';
import { TaskObjectComponent } from './object/object.component';

const routes: Routes = [
  {
    path: "",
    component: TaskPageComponent,
  },
  {
    path:":id",
    component: TaskObjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

