import { Component, } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { TaskDto } from 'src/app/models/task/taskDto';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'task-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class TaskPageComponent {

  main="/"

  public tasks$? : Observable<TaskDto[]>
  private destroy$: Subject<void>

  constructor(private service: TaskService) {
    this.destroy$ = new Subject<void>();
  }
  
  ngOnInit(): void {
    //this.tasks$ = this.service.getAllTasks().pipe(takeUntil(this.destroy$))
    const tasks: TaskDto[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const task = localStorage.getItem(key);
        if (task) {
          tasks.push(JSON.parse(task));
        }
      }
    }
    this.tasks$ = this.service.getAllTasks().pipe(
      //takeUntil(this.destroy$),
      map(() => tasks)
    )
  }

  onChange() {
    //this.tasks$ = this.service.getAllTasks().pipe(takeUntil(this.destroy$))
    const tasks: TaskDto[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const task = localStorage.getItem(key)!;
        tasks.push(JSON.parse(task));
      }
    }
    this.tasks$ = this.service.getAllTasks().pipe(
      //takeUntil(this.destroy$),
      map(() => 
        tasks.filter(task => task.id))
    )

    //this.tasks$
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
