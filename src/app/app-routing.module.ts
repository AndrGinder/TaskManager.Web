import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './modules/startpage/startpage.component';

const routes: Routes = [
  {
    path: "",
    title: "Task Manager",
    component: StartpageComponent
  },
  {
    path: "task",
    title: "My Tasks",
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
