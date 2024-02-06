import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {

  constructor(private route: Router) {

  }

  onEmpclick() {
    console.log("hello");

    this.route.navigate(["employee/8/xyz"])
  }

}
