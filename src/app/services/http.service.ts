import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get(url): Observable<any> {
    return this.http.get(url);
  }
}
