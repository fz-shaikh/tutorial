import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { SolutionComponent } from './solution/solution.component';
import { EmployeeComponent } from './employee/employee.component';
import { PracComponent } from './prac/prac.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './DataComunication/parent/parent.component';
import { InnerchildComponent } from './DataComunication/parent/innerchild/innerchild.component';
import { OuterChildComponent } from './DataComunication/outer-child/outer-child.component';
import { Parent2Component } from './DataCum/parent2/parent2.component';
import { Outerchild2Component } from './DataCum/outerchild2/outerchild2.component';
import { Child2Component } from './DataCum/parent2/child2/child2.component';
import { CompoAComponent } from './DataCum/compo-a/compo-a.component';
import { CompoBComponent } from './DataCum/compo-b/compo-b.component';
import { XCompComponent } from './DataCum/x-comp/x-comp.component';
import { YCompComponent } from './DataCum/y-comp/y-comp.component';
import { CompoPComponent } from './DataCum/compo-p/compo-p.component';
import { CompoQComponent } from './DataCum/compo-q/compo-q.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    SolutionComponent,
    EmployeeComponent,
    PracComponent,
    ParentComponent,
    InnerchildComponent,
    OuterChildComponent,
    Parent2Component,
    Outerchild2Component,
    Child2Component,
    CompoAComponent,
    CompoBComponent,
    XCompComponent,
    YCompComponent,
    CompoPComponent,
    CompoQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
