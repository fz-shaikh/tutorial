import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-innerchild',
  templateUrl: './innerchild.component.html',
  styleUrls: ['./innerchild.component.css']
})
export class InnerchildComponent {

  @Input() parentData: any;

  // @Input() parentData2: any;

  @Output() childEvent = new EventEmitter<any>();


  public childData1: any = "I m Child from Componant";

  // public chidData2: any = "This is InnerChild Data 2"



  constructor() {
    console.log(this.parentData);

  }

  ngOnInit() {
    console.log(this.parentData);

  }

  dataFromChildToParent() {
    console.log("button clicked");

    this.childEvent.emit(this.childData1)
  }

}
