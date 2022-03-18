import { Injectable } from '@angular/core';


import { Task } from 'src/app/Task';
import { Observable,of } from 'rxjs';
import{HttpClient,HttpHandler}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://http://localhost:5002/tasks'
  constructor(
    private http:HttpClient
  ) { }
  
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
