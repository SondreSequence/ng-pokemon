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
  public pokemonArray: { name: string, image: string }[] = [];

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
    let pokemons = JSON.parse(sessionStorage.getItem("captured-pokemon") || "[]");
  
    //Won't request data from the api if it's already stored in the sessionStorage
    if (!this.pokemonArray.length) {
      console.log("Activated")
      this.apiService.getPokemon().subscribe(
        (response: APIResponse) => {
        this.pokemonArray = response.results.map((element, index) => {
        let number = element.url.split('/')[6];
        let pkmnname = element.name;
        return {
        name: pkmnname.charAt(0).toUpperCase() + pkmnname.slice(1),
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"
        };
        });
        sessionStorage.setItem("captured-pokemon", JSON.stringify(this.pokemonArray));
        },
        error => {
        console.error(error);
        }
        );
    } else {
      this.pokemonArray = pokemons;
    }
      
    }
}

