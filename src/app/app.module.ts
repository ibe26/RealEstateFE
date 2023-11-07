import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyCardComponent } from './Component/Property/PropertyListing/property-card/property-card.component';
import { PropertyListComponent } from './Component/Property/PropertyListing/property-list/property-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FilterBarComponent } from './Component/filter-bar/filter-bar.component';
import { PropertyViewComponent } from './Component/Property/PropertyView/property-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingScreenComponent } from './Component/loading-screen/loading-screen.component';
import { YearPluralPipe } from './Pipes/year-plural.pipe';
import { PropertyTypeDropdownComponent } from './Component/Property/property-type-dropdown/property-type-dropdown.component';
import { PropertyListingTypeDropdownComponent } from './Component/Property/property-listing-type-dropdown/property-listing-type-dropdown.component';
import { FilteredListComponent } from './Component/Property/PropertyListing/filtered-list/filtered-list.component';
import { MainPageComponent } from './Component/Property/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    LoadingScreenComponent,
    FilteredListComponent,
    MainPageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    FilterBarComponent,
    PropertyCardComponent,
    NgbModule,
    PropertyViewComponent,
    PropertyTypeDropdownComponent,
    YearPluralPipe,
    PropertyListingTypeDropdownComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
