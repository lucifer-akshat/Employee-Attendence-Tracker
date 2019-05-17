import {MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
// import { Setting } from './settings.service';

const AngularMaterials = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterials,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AngularMaterials
  ],
  providers: [],
  entryComponents: [LoginComponent, RegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
