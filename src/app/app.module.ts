import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { PixapiComponent } from './pixapi/pixapi.component';
import { PictureService } from './picture.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PixapiComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PictureService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
