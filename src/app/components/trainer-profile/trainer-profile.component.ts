import { Component, OnInit } from '@angular/core';
import { APIResponse } from 'src/app/models/apiResponse.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ApiService } from 'src/app/services/api.service';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  constructor(private apiService: ApiService, private caughtPokemonService: CaughtPokemonService) {}

  public capturedPokemonArray: { name: string, image: string }[] = [];

  public onButtonClick(pokemon: Pokemon, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setTimeout(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
    console.log(pokemon.name)

    this.caughtPokemonService.removeFromCaughtPokemon(pokemon)
  }

  ngOnInit() {
    this.capturedPokemonArray = JSON.parse(sessionStorage.getItem("captured-pokemon") || "[]");  
    }
}

