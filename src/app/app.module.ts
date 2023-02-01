import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { PokemonApiComponent } from './components/pokemon-api/pokemon-api.component';
import { from } from 'rxjs';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilePageComponent } from './pages/profile.page/profile.page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    PokemonCataloguePage,
    LoginFormComponent,
    LoginPage,
    PokemonCataloguePage,
    PokemonApiComponent,
    NavbarComponent,
    ProfilePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
