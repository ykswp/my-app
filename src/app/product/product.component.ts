import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import  { CommonServiceService } from '../common-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'New Product launch';
  itemCount  = 0;
  userDetail

  constructor(private router:Router, private route:ActivatedRoute,private _http: Http, private commonData:CommonServiceService) {
    this.route.params.subscribe(params => this.userDetail = params.id)
   }

  // addItem(){

  //   this.itemCount++;
  //   console.log("test",this.itemCount);
  // }

  ngOnInit() {

    this.commonData.getUserData(this.userDetail).subscribe(data => this.userDetail = data)
  }

}
