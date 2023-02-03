import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';

@Component({
  selector: 'app-profile.page',
  templateUrl: './profile.page.component.html',
  styleUrls: ['./profile.page.component.css']
})
export class ProfilePageComponent {
  constructor(private readonly router: Router) {}

  public trainername: Trainer = JSON.parse(sessionStorage.getItem("pokemon-trainers")||"").username;
  

}
