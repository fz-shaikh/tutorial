import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private massage: any = new BehaviorSubject("Default massage");
  private currentMsg: any = this.massage.asObservable();

  public empData: any = new BehaviorSubject("This is Default empData");
  public currentEmpData: any = this.empData.asObservable();
  constructor() {

  }

  getData() {
    return this.currentMsg
  }

  setData(dt: any) {
    this.massage.next(dt)
  }



  // to return current observable value
  getEmpData() {
    return this.currentEmpData;
  }


  // to store or set the current observable value
  setEmpdata(dt: any) {
    this.empData.next(dt)
  }
}