import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private httpClient: HttpClient) { }

  //COLD observable
  getPost(): Observable<Post> {
    return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
  }
}
