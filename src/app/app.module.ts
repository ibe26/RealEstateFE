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
import { YearPluralPipe } from './Pipe/year-plural.pipe';
import { FilteredListComponent } from './Component/Property/PropertyListing/filtered-list/filtered-list.component';
import { MainPageComponent } from './Component/Property/main-page/main-page.component';
import { AddPropertyComponent } from './Component/Property/add-property/add-property.component';
import { HeatSystemsDropdownComponent } from './Component/Dropdowns/heat-systems-dropdown/heat-systems-dropdown.component';
import { FileUploadModule } from 'ng2-file-upload';
import { EditPropertyComponent } from './Component/Property/edit-property/edit-property.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { UnauthorizedPageComponent } from './Component/unauthorized-page/unauthorized-page.component';
import { UserNamePipe } from './Pipe/user-name.pipe';
import { PortfolioComponent } from './Component/Property/portfolio/portfolio.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { OwnedPropertyCardComponent } from './Component/Property/portfolio/owned-property-card/owned-property-card.component';
import { AddOwnedPropertyComponent, DialogContentExampleDialog } from './Component/Property/portfolio/add-owned-property/add-owned-property.component';


@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedPageComponent,
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FileUploadModule,
    NavbarComponent,
    FilterBarComponent,
    PropertyCardComponent,
    PropertyViewComponent,
    YearPluralPipe,
    AddPropertyComponent,
    HeatSystemsDropdownComponent,
    EditPropertyComponent,
    FilteredListComponent,
    PropertyListComponent,
    LoadingScreenComponent,
    RegisterComponent,
    MainPageComponent,
    LoginComponent,
    ProfileComponent,
    UserNamePipe,
    MatStepperModule,
    PortfolioComponent,
    OwnedPropertyCardComponent,
    AddOwnedPropertyComponent,
    DialogContentExampleDialog
  ],
  providers: [CdkStepperModule,CdkStepper],
  bootstrap: [AppComponent]
})
export class AppModule { }