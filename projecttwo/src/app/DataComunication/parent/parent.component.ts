import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public dataFromParent: any = "Data from Parent componant";

  // public dataFromParent1: any = "This is another Data From parent componant"

  public dataFromChild: any;

  fetchDataFromChild(data: any) {
    console.log(data);

    this.dataFromChild = data;
  }
}
