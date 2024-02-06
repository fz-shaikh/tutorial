import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PractService {

  public massege: any = new BehaviorSubject("Default Massege");
  public currentMsg: any = this.massege.asObservable();

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.currentMsg;
  }

  setData(data: any) {
    this.massege.next(data)
  }

}
