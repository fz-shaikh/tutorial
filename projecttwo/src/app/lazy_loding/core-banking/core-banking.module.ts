import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredidCradComponent } from './credid-crad/credid-crad.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { SavingComponent } from './saving/saving.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreBankingComponent } from './core-banking/core-banking.component';

const route: Routes = [
  { path: "", component: CoreBankingComponent },
  { path: 'credit', component: CredidCradComponent },
  { path: 'debit', component: DebitCardComponent },
  { path: 'saving', component: SavingComponent }
]

@NgModule({
  declarations: [
    CredidCradComponent,
    DebitCardComponent,
    SavingComponent,
    CoreBankingComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class CoreBankingModule { }
