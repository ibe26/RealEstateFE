import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './Component/Property/PropertyView/property-view.component';
import { MainPageComponent } from './Component/Property/main-page/main-page.component';
import { FilteredListComponent } from './Component/Property/PropertyListing/filtered-list/filtered-list.component';
import { AddPropertyComponent } from './Component/Property/add-property/add-property.component';
import { EditPropertyComponent } from './Component/Property/edit-property/edit-property.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { AuthGuardTokenService } from './Service/auth.service';
import { UnauthorizedPageComponent } from './Component/unauthorized-page/unauthorized-page.component';
import { PortfolioComponent } from './Component/Property/portfolio/portfolio.component';

const routes: Routes = [
  {path:'main-page',component:MainPageComponent},
  {path:'',redirectTo:'main-page',pathMatch:'full'},
  {path:'view-property/:id',component:PropertyViewComponent},
  {path:'filtered-list',component:FilteredListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'edit-property/:id',component:EditPropertyComponent,canActivate:[AuthGuardTokenService]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'unauthorized',component:UnauthorizedPageComponent},
  {path:'portfolio/:id',component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
