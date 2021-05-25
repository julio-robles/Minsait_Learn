import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestExampleService {

  constructor(private http: HttpClient) { }

  getCharacters(url: string) {
    return this.http.get(url);
  }
}