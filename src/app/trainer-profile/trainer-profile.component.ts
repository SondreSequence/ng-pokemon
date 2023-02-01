import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Trainer } from 'src/app/models/trainer.model';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    let profile = JSON.parse(sessionStorage.getItem("Trainer")|| "[]");
    
    return
    
  }
}

