import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonServiceService } from './common-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private Commonservices:CommonServiceService ){ }
getData = [];
errorData:string;
postId: string;
  // title = 'My New Applicaiton';

  //  arr = ["A","B"];
  //  sortArray = [1,5,6,7,9,4,6,3,9,0];
  //  addItem ="";
  //  day = new Date();

  //  pushItems(){
    
  //   if(this.addItem != "" ){

  //     this.arr.push(this.addItem);
  //     console.log(this.arr);
  //     this.addItem="";
    
  //   }
  //  }
  //  deletItem(ind){
  //    console.log(ind);
  //    this.arr.splice(ind,1);

  //  }
  // istrue = true;
  // myName = "yogesh";
 //myLibrary: any;
form;
ngOnInit(){
  console.log("Service",this.Commonservices.fetchData());
this.Commonservices.fetchData().subscribe(resEmpData  => this.getData = resEmpData,
  resEmpError  => this.errorData = resEmpError
);

this.form  = new FormGroup({

  firstname: new FormControl("",Validators.compose([
    Validators.minLength(2),
  
  ])),
  lastname: new FormControl(""),
    city: new FormControl("")
  // decimal: new FormControl(""),
  // binary: new FormControl(""),
  // octal: new FormControl(""),
  // hexa: new FormControl(""),

  });
}


onSubmit(value){
  console.log('user', value);
}
// decimalChanged(oldvalue, newvalue){
//   // console.log("user",newvalue);
//   if(newvalue != ""){
// this.form.patchValue({ binary: parseInt(newvalue,10).toString(2)});
// this.form.patchValue({octal: parseInt(newvalue, 10).toString(8)});
// this.form.patchValue({hexa: parseInt(newvalue, 10).toString(16).toUpperCase()});

//   }
//   else{
//     this.form.patchValue({ binary: ""});
//     this.form.patchValue({octal:""});
//     this.form.patchValue({hexa:""});

//   }

//  }
// b = 0;
// o = 0;
// h = 0

//  binaryChanged(oldvalue, newvalue){
//    this.b = this.b+1;
//    if(this.b == 1){
//     if(newvalue != ""){
//       this.form.patchValue({ decimal: parseInt(newvalue,2).toString(10)});
      
//         }
//         else{
//           this.form.patchValue({ decimal: ""});
      
//         }
//         this.b =0;
//    }
//   // console.log("user",newvalue);


//  }

//  octalChanged(oldvalue, newvalue){
//   this.o = this.o+1;
//   if(this.o == 1){
//    if(newvalue != ""){
//      this.form.patchValue({ decimal: parseInt(newvalue,8).toString(10)});
     
//        }
//        else{
//          this.form.patchValue({ decimal: ""});
     
//        }
//        this.o =0;
//   }
//  // console.log("user",newvalue);


// }

// hexaChanged(oldvalue, newvalue){
//   this.h = this.h+1;
//   if(this.h == 1){
//    if(newvalue != ""){
//      this.form.patchValue({ decimal: parseInt(newvalue,16).toString(10)});
     
//        }
//        else{
//          this.form.patchValue({ decimal: ""});
     
//        }
//        this.h =0;
//   }
//  // console.log("user",newvalue);


// }

}
//console.log('yug',this.myLibrary);