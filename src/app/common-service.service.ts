import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  myData: any[] = [];
  private _url: string ="https://jsonplaceholder.typicode.com/comments?postId=2";
  constructor(private _http: Http) { }

  success(){

    return "Successfully!";
  }
  fetchData() {
    return  this._http.get(this._url)
      .map( 
          (res: Response) =>res.json())
      .catch(this.handleError);
   
  }

  handleError(error: Response) {
      return Observable.throw(error ||"Server Error" );
  }
getUserData(UserId){

  return  this._http.get('https://jsonplaceholder.typicode.com/users'+UserId)

}

getUsername(){

  return  this._http.get('https://jsonplaceholder.typicode.com/users');

}
}
