import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { TaskDto } from 'src/app/models/task/taskDto';
import { TaskForm } from 'src/app/models/task/taskForm';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'task-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class TaskPageComponent {

  public tasks$? : Observable<TaskDto[]>
  public viewForm = false
  public taskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required, 
      Validators.minLength(2),
    ]),
  })
  public errors = []
  private destroy$ = new Subject<void>();

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.service.getAllTasks().pipe(takeUntil(this.destroy$))
  }

  public displayForm(){
    this.viewForm = !this.viewForm
  }

  public handleForm(){
    if(!this.taskForm.valid){
      this.retrieveErrors()
    }
    else{
      this.submitForm()
    }
  }

  public submitForm(){
    const form = this.taskForm.value
    const body: TaskForm = {
      title: form.title!.trim()
    }
    this.service.addTask(body)
    this.ngOnInit()
  }

  public retrieveErrors(){
    const form = document.querySelectorAll('.task__input')
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
