import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  createUser(params) {
    return this.http.post("api URL", params);
  }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
