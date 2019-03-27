import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from './worker';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  url = 'http://localhost:62593/Api/Workers';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  getAllWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.url + '/AllWorkersInfo');
  }

  getWorkerById(WorkerId: string): Observable<Worker> {
    return this.http.get<Worker>(this.url + '/GetWorkerById/' + WorkerId);
  }

  createWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.url + '/CreateWorker/', worker, this.httpOptions);
  }

  updateWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(this.url + '/UpdateWorker/', worker, this.httpOptions);
  }

  deleteWorkerById(workerId: string): Observable<number> {
    return this.http.delete<number>(this.url + '/DeleteWorkerById/' + workerId, this.httpOptions);
  }
}