import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { SolutionComponent } from './solution/solution.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './DataComunication/parent/parent.component';
import { Parent2Component } from './DataCum/parent2/parent2.component';
import { CompoAComponent } from './DataCum/compo-a/compo-a.component';
import { CompoBComponent } from './DataCum/compo-b/compo-b.component';
import { XCompComponent } from './DataCum/x-comp/x-comp.component';
import { YCompComponent } from './DataCum/y-comp/y-comp.component';
import { CompoPComponent } from './DataCum/compo-p/compo-p.component';
import { CompoQComponent } from './DataCum/compo-q/compo-q.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent, pathMatch: 'full' },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  { path: "solution", component: SolutionComponent, pathMatch: 'prefix' },
  { path: "employee/:id/:name", component: EmployeeComponent },
  { path: "parent", component: ParentComponent },
  { path: "parent2", component: Parent2Component },
  { path: "CompoA", component: CompoAComponent },
  { path: "compoB", component: CompoBComponent },
  { path: "xcompo", component: XCompComponent },
  { path: "ycompo", component: YCompComponent },
  { path: "compoP", component: CompoPComponent },
  { path: "compoQ", component: CompoQComponent },
  {
    path: "corebanking",
    loadChildren: () => import('./lazy_loding/core-banking/core-banking.module').then(mod => mod.CoreBankingModule)
  },
  {
    path: "loan",
    loadChildren: () => import('./lazy_loding/loan/loan.module').then(mod => mod.LoanModule)
  },
  {
    path: "loanTwo",
    loadChildren: () => import('./lazy_loding/loan-two/loan-two.module').then(mod => mod.LoanTwoModule)
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
