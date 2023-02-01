import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms'
import { Trainer } from 'src/app/models/trainer.model'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  //DI
  constructor(private readonly loginService: ApiService) {}

  public loginSubmit(loginForm: NgForm): void{

    const { username } = loginForm.value;
    
    this.loginService.login(username)
      .subscribe({
        next:(trainer: Trainer) =>{

        },
        error:() => {

        }
      })
  }

}
