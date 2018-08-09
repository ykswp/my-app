import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
 
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
getData;
name;
id: string ='';
email;
found: boolean;
  constructor(private router:Router, private route:ActivatedRoute,private _http: Http) { }
  onNamekeyUp(event){
   // console.log("change",event.target.value);
   this.id = event.target.value;
   this.found = false;

  }
  getProfileData(){
    this._http.get(`https://jsonplaceholder.typicode.com/comments?id=${this.id}`)
    .subscribe((res : Response) => {
      this.getData = res.json();
      if(this.getData.length){

      this.email = this.getData[0].email;
      this.name = this.getData[0].name;
      this.found = true;
      }
     console.log("Reas",this.getData);
    })
  }
postProfileData(){
    this._http.post(`https://jsonplaceholder.typicode.com/comments?id=1`,{ name:'yug', email:'yug@gmail.com'})
    .subscribe((res : Response) => {
      this.getData = res.json();
      if(this.getData.length){

      this.email = this.getData[0].email;
      this.name = this.getData[0].name;
      this.found = true;
      }
     console.log("Reas",this.getData);
    })
  }
  ngOnInit() {
  }


  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route });
  
  }
  showTeam(){
    this.router.navigate(['team'],{relativeTo:this.route });
  
  }
}
