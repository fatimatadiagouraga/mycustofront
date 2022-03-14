import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  urlIns = "http://localhost:8080/mycustoApi/client/"

  constructor(private http:HttpClient) { }
  Inscription(data:any){
    return this.http.post(this.urlIns+"ajoutClient", data)
  }
}
