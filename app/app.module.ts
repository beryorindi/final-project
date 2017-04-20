import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginBarComponent } from './header/login-bar/login-bar.component';
import { SearchBarComponent } from './header/search-bar/search.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation.component';
import { EmployeeComponent } from './container/employee-list/employee.component';
import { EmployeeListComponent } from './container/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './container/employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
/*import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';*/

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    //routing
  ],
  declarations: [
    AppComponent,
    LoginBarComponent,
    SearchBarComponent,
    NavigationBarComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
    /*MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent*/
  ],
  providers: [
    EmployeeService
    /*{ provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: MockXHRBackend }*/
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}