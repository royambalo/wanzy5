import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getNotes(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>('/assets/mockData/note.mock.json');
  }
}
