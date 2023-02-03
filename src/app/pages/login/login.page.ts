import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  constructor(private readonly router: Router) {}

  handleLogin(): void {
    this.router.navigateByUrl('/catalogue');
  }

  public handleMouseEnter(pokemonLogo: HTMLElement) {
    pokemonLogo.className =
      'pokemon-logo animate__animated animate__rubberBand';
    setTimeout(() => {
      pokemonLogo.className = 'pokemon-logo';
    }, 1000);
  }
}
