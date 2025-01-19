import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateTaskForm } from 'src/app/models/task/updateTaskForm';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'task-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class TaskObjectComponent {

  @Input() task: any
  @Output() onChange: EventEmitter<any>
  public taskForm: any

  constructor(private service: TaskService) {
    this.taskForm = new FormGroup({
      title: new FormControl('', [
        Validators.required, 
        Validators.minLength(2),
      ]),
    })
    this.onChange = new EventEmitter<any>
  }

  public updateTask(status: string){
    const body: UpdateTaskForm = {
      title: this.task.title!,
      status: status
    }
    const savedTask = JSON.parse(localStorage.getItem(this.task.id)!)
    savedTask.title = body.title
    savedTask.status = status
    localStorage.setItem(savedTask.id, JSON.stringify(savedTask))
    this.onChange.emit()
    // this.service.updateTask(this.task.id, body).subscribe(
    //   () => this.onChange.emit()
    // );
  }

  public deleteTask(){
    localStorage.removeItem(this.task.id)
    this.onChange.emit()
    // this.service.deleteTask(this.task.id).subscribe(
    //   () => this.onChange.emit()
    // );
  }
}
