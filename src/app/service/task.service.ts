import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable,of } from 'rxjs';
import{HttpClient,HttpHandler}from'@angular/common/http';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:5004/tasks'
  constructor(
    private http:HttpClient
  ) { }
  
  getTasks():Observable<Task[]> { 
    return this.http.get<Task[]>(this.apiUrl)
    //const tasks= of(TASKS);
    //return tasks
  }
}
