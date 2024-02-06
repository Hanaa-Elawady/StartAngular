import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'' , component:HomeComponent ,title:'home'},
  {path:'about' , component:AboutComponent ,title:'about'},
  {path:'portfolio' , component:PortfolioComponent ,title:'portfolio'},
  {path:'contacts' , component:ContactsComponent ,title:'contacts'},
  {path:'**' , component:NotFoundComponent,title:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
