import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTaskForm } from 'src/app/models/task/newTaskForm';
import { TaskDto } from 'src/app/models/task/taskDto';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'create-task',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateTaskFormComponent {
  public taskForm: any
  public errors = []
  @Output() onChange: EventEmitter<any>

  constructor(private service: TaskService) {
    this.taskForm = new FormGroup({
      title: new FormControl('', [
        Validators.required, 
        Validators.minLength(2),
      ]),
    })
    this.onChange = new EventEmitter<any>()
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
    const body: NewTaskForm = {
      title: form.title!.trim()
    }
    this.service.addTask(body).subscribe({
      next: (task: TaskDto) => {
        localStorage.setItem(
          task!.id.toString(), 
          JSON.stringify(task)
        )
        this.onChange.emit()
        this.taskForm.reset()
      }
    })
  }

  public retrieveErrors(){
    const form = document.querySelectorAll('.task__input')
  }
}
