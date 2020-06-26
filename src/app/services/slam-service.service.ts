import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{slam} from '../models/slammodel';
import{linkm} from '../models/linkmodel';
//import  'rxjs/add/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SlamServiceService {

  constructor(private http: HttpClient) { }

  hostserver:string="http://localhost:8081" ;
  slamUrl=this.hostserver+"/slam";
  linkUrl=this.hostserver+"/link";
  //.map(res=>res.json())

public getSlams(userid){
  return this.http.get<slam[]>(this.slamUrl+"/test")
  ;  //view
}
public getLink(userid,fName)
{
  return this.http.get<linkm>(this.linkUrl+"/test"+"/"+fName)
  ;  //view
}
public checkLink(userid,id){
  return this.http.get<linkm>(this.linkUrl+"/check/"+"test"+"/"+id);   //write
}
public deleteSlam(userid,slamId){
  return this.http.delete<slam>(this.slamUrl+"/test"+"/"+slamId);  //view
}
public postSlam(userid,friendName,linkId,newSlam){
  return this.http.post<slam>(this.slamUrl+"/test"+"/"+friendName+"/"+linkId,newSlam);  //write
}
}
