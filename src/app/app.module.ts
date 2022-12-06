import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

/*======================== Import Modules ========================*/
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCheckboxModule} from '@angular/material/checkbox';

/*======================== Custom Components =====================*/
import { TestDataComponent } from './test-data';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { JqueryFileComponent } from './jquery-file/jquery-file.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

/*========================= Custom Services ======================*/
import { BookService } from './book.service';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { Approutes } from './routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PersonComponent,
    JqueryFileComponent,
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(Approutes),
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(TestDataComponent),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [BookService, UserService],  // ActivateGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
