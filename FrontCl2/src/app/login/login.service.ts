import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url1=environment.URL1;

  constructor(private http: HttpClient) {
   }
   getLoginSer(login : String, motdepasse : String){
    return  this.http.get(this.url1+"/login?login="+login+"&motdepasse="+motdepasse);
    }
}
