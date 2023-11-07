import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './Component/Property/PropertyView/property-view.component';
import { PropertyListComponent } from './Component/Property/PropertyListing/property-list/property-list.component';
import { FilterBarComponent } from './Component/filter-bar/filter-bar.component';
import { MainPageComponent } from './Component/Property/main-page/main-page.component';
import { FilteredListComponent } from './Component/Property/PropertyListing/filtered-list/filtered-list.component';

const routes: Routes = [
  {path:'main-page',component:MainPageComponent},
  {path:'',redirectTo:'main-page',pathMatch:'full'},
  {path:'view-property/:id',component:PropertyViewComponent},
  {path:'filtered-list',component:FilteredListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
