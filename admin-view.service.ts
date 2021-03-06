import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {
  private _router: any;

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/api/addBatch";
  url1 = "http://localhost:3000/api/getBatches";
 // url2 = "http://localhost:3000/api/sub-batches/batchName";
  url3 = "http://localhost:3000/api/delete_Batch";




  //to put newly added batch details into the database

  addBatch(batchDetails: any) {
    return this.http.post<any>(this.url,batchDetails);
  }

  delete_Batch(batch_id:any){
    return this.http.get(this.url3 + "/" + batch_id);
  }







 

  //to get the details of all the batches in the database

getBatches(){
  return this.http.get(this.url1);
}

//to remove token from browser and logging out the admin

logoutUser(){
  localStorage.removeItem('token')
  this._router.navigate(['/login']);
}

//to check if admin is logged in or not 

loggedin(){
  return !!localStorage.getItem('token')
}


  
}
