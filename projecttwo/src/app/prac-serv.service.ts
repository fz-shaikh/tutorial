import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracServService {
  // setData(dataFromP: any) {
  //   throw new Error('Method not implemented.');
  // }
  // sendData: any;
  // getMsgData: any;

  constructor(private http: HttpClient) {


  }

  getApiData() {
    return this.http.get("http://localhost:3000/data")
  };
  postApiData(data: any) {
    delete data.id;
    return this.http.post("http://localhost:3000/data", data)
  }
  putApiData(data: any) {
    let id = data.id;
    delete data.id;
    return this.http.put("http://localhost:3000/data/" + id, data)
  }
  deleteApiData(data: any) {
    return this.http.delete("http://localhost:3000/data/" + data.id)
  }
}
