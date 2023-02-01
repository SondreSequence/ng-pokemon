import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms'
import { Trainer } from 'src/app/models/trainer.model'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() login: EventEmitter<void> = new EventEmitter();

  //DI
  constructor(
    private readonly loginService: ApiService,
    private readonly userService: UserService
    ) {}

  public loginSubmit(loginForm: NgForm): void{

    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next:(trainer: Trainer) =>{
          this.userService.trainer = trainer;
          this.login.emit();
        },
        error:() => {

        }
      })
  }

}
