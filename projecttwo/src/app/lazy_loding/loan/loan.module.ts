import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersanalLoanComponent } from './persanal-loan/persanal-loan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { CorloanComponent } from './corloan/corloan.component';
import { RouterModule, Routes } from '@angular/router';
import { CarloanComponent } from '../loan-two/carloan/carloan.component';
import { LoanComponent } from './loan/loan.component';


const route: Routes = [
  { path: "", component: LoanComponent },
  { path: "persanal", component: PersanalLoanComponent },
  { path: "homee", component: HomeloanComponent },
  { path: "car", component: CarloanComponent }
]

@NgModule({
  declarations: [
    PersanalLoanComponent,
    HomeloanComponent,
    CorloanComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class LoanModule { }
