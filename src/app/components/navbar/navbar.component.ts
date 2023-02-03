import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{


  get user(): Trainer | undefined{
    return this.userService.user;
  }
  constructor(
    private readonly userService: UserService
  )
  {}

  

}
