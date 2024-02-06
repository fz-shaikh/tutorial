import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuisnessloanComponent } from './buisnessloan/buisnessloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { AgriloanComponent } from './agriloan/agriloan.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  { path: "agri", component: AgriloanComponent },
  { path: "buisness", component: BuisnessloanComponent },
  { path: 'carr', component: CarloanComponent }
]

@NgModule({
  declarations: [
    BuisnessloanComponent,
    CarloanComponent,
    AgriloanComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class LoanTwoModule { }
