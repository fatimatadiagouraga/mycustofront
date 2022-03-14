import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsListeService {

 urlimage= environment.apiImage;

 url2 = environment.ListePlat;

 constructor(private http: HttpClient) { }

  //recuperer plat par id pour visualiser les details(ingredients)

  getById(id : any){
    return this.http.get(this.url2+'/platById/'+id);
  }
}
