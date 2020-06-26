import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SlamServiceService } from 'src/app/services/slam-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import {linkm} from '../../models/linkmodel';
import { slam } from 'src/app/models/slammodel';
import Swal from "sweetalert2";
@Component({
  selector: 'app-write-slam',
  templateUrl: './write-slam.component.html',
  styleUrls: ['./write-slam.component.css']
})
export class WriteSlamComponent implements OnInit {
id:string="";
friendName:string="";
linkm2:linkm=null;
linkId:string="";
slam1:slam;
flag:boolean=false;
  constructor(private route: ActivatedRoute,private router: Router,private fb:FormBuilder, private slamService:SlamServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event.id;
      this.friendName=event.friendName;
      this.linkId=event.linkId;
    });
      this.slamService.checkLink(this.id,this.linkId).subscribe(data=>{
        this.linkm2=data;console.log(data);console.log("data"); console.log(this.linkId);
        if(data) this.flag=true;
        else{
          Swal.fire(
            {
    title:"Invalid Link",
    text:"Redirecting to main page to sign in",
    timer:2000,
    icon:"warning"
            }
          );
          this.router.navigateByUrl('/');

        }

    });

  }

  slamForm=this.fb.group({
    que1: ['', Validators.required],
    que2: ['', Validators.required],
    que3: ['', Validators.required],
    que4: ['', Validators.required],
    que5: ['', Validators.required],
    que6: ['', Validators.required],
    que7: ['', Validators.required],
    que8: ['', Validators.required],
    que9: ['', Validators.required],
    que10: ['', Validators.required],
    que11: ['', Validators.required],
    que12: ['', Validators.required],
  });

  public postSlam()
  {
this.slamService.postSlam(this.id,this.friendName,this.linkId,this.slamForm.value)
.subscribe(data=>{this.slam1=data;
  console.log(data);
  Swal.fire({
    title: "sign in if want to ask your friends too!!",
    icon: "success",
    timer:3000

  });
  this.router.navigateByUrl('/');
}
);


}}
