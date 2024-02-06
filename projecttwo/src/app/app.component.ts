import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projecttwo';

  navigationFlag: boolean = false;


  constructor(private route: Router) {
    this.navigationFlag = true

  }

  onAboutUs() {
    if (this.navigationFlag) {
      this.route.navigateByUrl('aboutus')
    }
  }

  onSolution() {
    if (this.navigationFlag) {
      this.route.navigate(['solution'])
    }
  }

  onEmpClick() {
    this.route.navigate(["employee/10/abc"])
  }
}
