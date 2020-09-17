import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AuthModule} from '@auth0/auth0-angular';
import {LoginComponent} from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
