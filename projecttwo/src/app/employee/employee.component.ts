import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private actRoute: ActivatedRoute) {


    // to recive the data there are two ways

    // route param
    // console.log(this.actRoute.snapshot.params);
    console.log(this.actRoute.snapshot.params['id']);
    console.log(this.actRoute.snapshot.params['name']);

    //param Map
    console.log("hiii");

    // console.log(this.actRoute.paramMap);
    this.actRoute.paramMap.subscribe({
      next: (res: any) => {
        console.log(res.params);
        console.log(res.params.id);
        console.log(res.params.name);

      },
      error: (err: any) => {
        console.log(err);

      }
    })


  }





}
