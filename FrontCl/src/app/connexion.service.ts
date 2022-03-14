import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  url='http://localhost:8080/mycustoApi/client';

 constructor(
    private http: HttpClient)
     { }

     loginClient(login: string, motdepasse: string){
      return this.http.get(this.url+'/login'+login+'&'+motdepasse);
    }
 }
