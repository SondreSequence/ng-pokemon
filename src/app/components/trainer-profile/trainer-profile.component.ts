import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  constructor(private caughtPokemonService: CaughtPokemonService) {}
  public caughtPokemonArray: Pokemon[] = [];
  constructor(private apiService: ApiService, private caughtPokemonService: CaughtPokemonService) {}

  public capturedPokemonArray: { name: string, image: string }[] = [];

  public onButtonClick(pokemon: Pokemon, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setTimeout(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
    console.log(pokemon.name)

    this.caughtPokemonService.removeFromCaughtPokemon(2)
  }


  public handleMouseEnter(pokemonImg: HTMLElement){
      pokemonImg.className = 'animate__animated animate__bounce';
    setTimeout(() => {
      pokemonImg.className = '';
    }, 1000);
  }


  ngOnInit() {
    this.caughtPokemonArray = JSON.parse(sessionStorage.getItem("captured-pokemon") || "[]");
  }
}
    this.capturedPokemonArray = JSON.parse(sessionStorage.getItem("captured-pokemon") || "[]");  
    }
}

