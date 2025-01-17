import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDto } from '../models/task/taskDto';
import { TaskForm } from '../models/task/taskForm';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient) { }

  public getAllTasks(): Observable<TaskDto[]>{
    return this._http.get<TaskDto[]>('https://localhost:7007/task')
  }

  public addTask(body: TaskForm){
    console.log(body)
    var res = this._http.post('https://localhost:7007/task', body)
    res.subscribe(response => console.log(response))
  }

}
