import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(environment.baseUrl)
  }

  getCharacter(id: any) {
    return this.http.get(environment.baseUrl + "/" + id)
  }
}
