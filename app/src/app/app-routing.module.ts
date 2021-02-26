import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'contact-component', component: ContactComponent, },
  { path: 'contact-confirmation-component', component: ContactConfirmationComponent },
  { path: 'dashboard-component', component: DashboardComponent, 
    children: [
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'customers',
        component: CustomerListComponent
      }, 
      {
        path: 'leads',
        component: LeadsListComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'chart',
        component: ChartComponent
      }
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
