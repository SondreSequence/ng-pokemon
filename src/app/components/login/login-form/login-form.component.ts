import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) {}

  public loginSubmit(loginForm: NgForm): void {
    const { username } = loginForm.value;

    if (username != '') {
      this.loginService.login(username).subscribe({
        next: (user: Trainer) => {
          this.userService.user = user;
          this.login.emit();
        },
        error: () => {},
      });
    } else {
      console.log('username too short');
    }
  }

  public handleMouseEnter(pokeBall: HTMLElement) {
    pokeBall.className = 'pokeball animate__animated animate__bounce';
    setTimeout(() => {
      pokeBall.className = 'pokeball';
    }, 1000);
  }
}
