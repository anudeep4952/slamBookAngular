import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from '../models/usermodel'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  hostserver:string="http://localhost:8081" ;
  verifyUrl=this.hostserver+"/login"

  public verifyToken(token){
    console.log(this.verifyUrl)
    return this.http.post<User>(this.verifyUrl,{"idtoken":token});
   }  

}
