import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{SlamServiceService} from '../../services/slam-service.service';
import {slam} from '../../models/slammodel';
import {linkm} from '../../models/linkmodel';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from "@angular/router";
@Component({
  selector: 'app-view-slams',
  templateUrl: './view-slams.component.html',
  styleUrls: ['./view-slams.component.css']
})
export class ViewSlamsComponent implements OnInit {
  slams:slam[];
  id:string="";
 linkm1:linkm={"link":"","_id":"","__v":""};
 sm:slam={"userid":"","friendName":"","que1":"","que2":"","que3":"","que4":"","que5":"","que6":"","que7":"","que8":"","que9":"","que10":"","que11":"","que12":"","_id":"","__v":""};

  constructor(private route: ActivatedRoute,private router: Router,private fb:FormBuilder, private slamService:SlamServiceService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event.id;
     });
     this.slamService.getSlams(this.id).subscribe(data=>{this.slams=data;console.log(data); console.log(this.slams)});
    }

linkForm=this.fb.group({
  fName: ['', Validators.required],});





  public getLink()
  {
this.slamService.getLink(this.id,this.linkForm.get('fName').value).subscribe(data=>{this.linkm1=data;console.log(data);console.log("data"); console.log(this.linkm1)});
  }




/**
 * showSlam
p */
public showSlam(p) {
  this.sm.que1=p.que1;
  this.sm.que2=p.que2;
  this.sm.que3=p.que3;
  this.sm.que4=p.que4;
  this.sm.que5=p.que5;
  this.sm.que6=p.que6;
  this.sm.que7=p.que7;
  this.sm.que8=p.que8;
  this.sm.que9=p.que9;
  this.sm.que10=p.que10;
  this.sm.que11=p.que11;
  this.sm.que12=p.que12;
  this.sm.userid=p.userid;
  this.sm.friendName=p.friendName;
  this.sm.__v=p.__v;
  this.sm._id=p._id;
}


copyLink(val: string){
  Swal.fire({title: "link copied",
   icon: "success",
   timer:1000
 });
 const selBox = document.createElement('textarea');
 selBox.style.position = 'fixed';
 selBox.style.left = '0';
 selBox.style.top = '0';
 selBox.style.opacity = '0';
 selBox.value = val;
 document.body.appendChild(selBox);
 selBox.focus();
 selBox.select();
 document.execCommand('copy');
 document.body.removeChild(selBox);
}


/**
 * deleteSlam(p._id)
 */
public deleteSlam(dslam) {

  Swal.fire(
    {title: "Are you sure?",
    text: "Once deleted, you will not be able to recover "+dslam.friendName+"'s slam!",
    icon: "warning",
    showCancelButton:  true,
    confirmButtonText: "Yes, delete",
    cancelButtonText: "No"

   }
   ).then((x) => {
      if (x.value) {

 this.slamService.deleteSlam(this.id,dslam._id).subscribe(data=>{console.log(data),
  this.slamService.getSlams(this.id).subscribe(data=>{this.slams=data;console.log(data); console.log(this.slams)}),
  this.router.navigateByUrl('/view/'+this.id),
  Swal.fire({title: ""+dslam.friendName+"'s slam has been deleted successfully!",
    icon: "success",
    timer:1500,}
  )

});
}}
  )
;

}


}




