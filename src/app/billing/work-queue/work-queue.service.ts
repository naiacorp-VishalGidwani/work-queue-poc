import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WorkQueueRequest, WorkQueueResponse} from "./types";
import {Observable, of} from "rxjs";
import {TIMELY_FILING_MOCK_DATA_GENERATORS} from "./constants";

@Injectable({
  providedIn: 'root'
})
export class WorkQueueService {

  readonly isTest = true;

  constructor(private http: HttpClient) { }

  getWorkQueue(request: WorkQueueRequest): Observable<WorkQueueResponse> {
    if (this.isTest) {
      return this.getMockDataForWorkQueue(request);
    } else {
      return this.http.post<WorkQueueResponse>('http://localhost:5182/api/v1/work-queue', request);
    }
  }

  getMockDataForWorkQueue(request: WorkQueueRequest): Observable<WorkQueueResponse> {
    const data: Record<string, any>[] = [];

    for (let i = 0; i < 30; i++) {
      const row: any = {};
      request.Fields.forEach(f => {
        if (TIMELY_FILING_MOCK_DATA_GENERATORS[f]) {
          row[f] = TIMELY_FILING_MOCK_DATA_GENERATORS[f](request);
        }
      })
      data.push(row);
    }

    const response: WorkQueueResponse = {
      Data: data,
    }

    return of(response);
  }
}
