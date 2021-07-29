import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/assets/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  public getInfo():Observable<any>{
    return this.http.get(environment.apiInfoCovid)
  }
  public getVacina():Observable<any>{
    return this.http.get(environment.apiVacinaCovid)
  }
}
