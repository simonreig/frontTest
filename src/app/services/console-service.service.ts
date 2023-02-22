import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Comment, Objective, Perspective } from '../models/consoleDto';

const base_url = 'http://localhost:3000';
//https://github.com/pyorlano/cst-frontend-test/blob/master/db.json

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http: HttpClient) { }

  getPerspectives(): Observable<Array<Perspective>> {
    return this.http.get<Array<Perspective>>(`${base_url}/perspectives`);
  }

  getObjectives(): Observable<Array<Objective>> {
    return this.http.get<Array<Objective>>(`${base_url}/objectives`);
  }

  getComments(): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${base_url}/comments`);
  }

}
