import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FetchPatientComponent } from './fetch-patient/fetch-patient.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  {component:AddPatientComponent, path:'add'},
  {component:HomeComponent, path:''},
  {component:UpdatePatientComponent, path:'update/:id'},
  {component:FetchPatientComponent, path:'all'},
  {component:LoginComponent, path:'login'},
  {component:RegisterComponent, path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
