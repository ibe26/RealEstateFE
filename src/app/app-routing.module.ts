import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './Component/Property/PropertyView/property-view.component';
import { PropertyListComponent } from './Component/Property/PropertyListing/property-list/property-list.component';

const routes: Routes = [
  {path:'property-list',component:PropertyListComponent},
  {path:'',redirectTo:'property-list',pathMatch:'full'},
  {path:'view-property/:id',component:PropertyViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
