import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  constructor(private http: HttpClient) { }
  
  public getPosts():Observable<any>{
    return this.http.get(environment.apiPosts)
  }

  public getComments():Observable<any>{
    return this.http.get(environment.apiComments)
  }

  public getAlbums():Observable<any>{
    return this.http.get(environment.apiAlbums)
  }

  public getTodos():Observable<any>{
    return this.http.get(environment.apiTodos)
  }
  
  public getPhotos():Observable<any>{
    return this.http.get(environment.apiPhotos)
  }

  public getUsers():Observable<any>{
    return this.http.get(environment.apiUsers)
  }
}
