import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TaskListComponent {

  @Input() tasks: any
  @Output() blockChange = new EventEmitter<any>()

  public onChange(tasks: any){
    this.blockChange.emit(tasks)
  }
}
