import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  urlPlat=environment.ListePlat;
  urlImg=environment.apiImage;
  constructor(private http: HttpClient) {}

    getPlatSer(id: number){
      return  this.http.get(this.urlPlat+'/listParMenu/'+id);
    }
}
