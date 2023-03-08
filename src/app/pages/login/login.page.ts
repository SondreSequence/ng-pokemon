import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit{
  constructor(@Inject(Router) private readonly router: Router, private readonly userService: UserService) {}

  handleLogin(): void {
    this.router.navigate(["/catalogue"]).then(() => {
      this.router.navigateByUrl("/catalogue");
    });
    
  }

  public handleMouseEnter(pokemonLogo: HTMLElement) {
    pokemonLogo.className =
      'pokemon-logo animate__animated animate__rubberBand';
    setTimeout(() => {
      pokemonLogo.className = 'pokemon-logo';
    }, 1000);
  }

  public inputChange(value:string, input: HTMLHeadElement) {
    console.log(value);
    input.className = '';
    input.innerHTML = value;
    setTimeout(() => {
      input.className = 'form-text anim-typewriter';
    }, 1);
}

  ngOnInit(): void {
      
    if(this.userService.user){
      this.router.navigateByUrl("/catalogue");
    }
    
  }

}