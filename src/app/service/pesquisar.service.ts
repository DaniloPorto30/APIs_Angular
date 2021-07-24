import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  constructor(private http: HttpClient) { }
  
  public getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  public getComments():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }

  public getAlbums():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }

  public getTodos():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  
  public getPhotos():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }

  public getUsers():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
