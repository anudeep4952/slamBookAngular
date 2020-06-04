import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-slams',
  templateUrl: './view-slams.component.html',
  styleUrls: ['./view-slams.component.css']
})
export class ViewSlamsComponent implements OnInit {

  id:string="";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event.id;
     });
  }

}
