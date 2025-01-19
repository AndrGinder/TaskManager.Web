import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TaskDto } from '../models/task/taskDto';
import { NewTaskForm } from '../models/task/newTaskForm';
import { UpdateTaskForm } from '../models/task/updateTaskForm';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient) { }

  public getAllTasks(): Observable<TaskDto[]>{
    return this._http.get<TaskDto[]>('https://localhost:7007/task')
  }

  public getTaskById(id: number): Observable<TaskDto>{
    return this._http.get<TaskDto>(`https://localhost:7007/task/${id}`)
  }

  public addTask(body: NewTaskForm): Observable<TaskDto>{
    const data = this._http.post<TaskDto>('https://localhost:7007/task', body)
    return data;
  }

  public updateTask(id: number, body: UpdateTaskForm): Observable<TaskDto>{
    return this._http.put<TaskDto>(`https://localhost:7007/task/${id}`, body)
  }

  public deleteTask(id: number): Observable<number>{
    return this._http.delete<number>(`https://localhost:7007/task/${id}`)
  }

}
