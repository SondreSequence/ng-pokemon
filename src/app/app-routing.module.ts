import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginPage },
  {
    path: 'catalogue',
    component: PokemonCataloguePage,
    canActivate: [AuthGuard],
  },
  {path: 'profile', component: page}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Import a module
  exports: [RouterModule], //Expose modules and features
})
export class AppRoutingModule {}
