import { Component, OnInit, Renderer2,} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { APIResponse } from 'src/app/models/apiResponse.model';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})



export class PokemonApiComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  public pokemonArray: { name: string, image: string }[] = [];

  public onButtonClick(pokemon: Pokemon, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setInterval(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
  }

 public inputChange(pokemon: Pokemon, input: HTMLElement ) {
    input.className = '';
    setInterval(() => {
      input.className = "form-text anim-typewriter";
    }, 2);
    input.innerHTML = "You caught " + pokemon.name + "!";
  } 

  public handleMouseEnter(pokemonImg: HTMLElement){
    pokemonImg.className = 'animate__animated animate__bounce';
  }

  public handleMouseLeave(pokemonImg: HTMLElement){
    pokemonImg.className = '';
  }


ngOnInit() {
  let pokemons = JSON.parse(sessionStorage.getItem("pokemons") || "[]");

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
      sessionStorage.setItem("pokemons", JSON.stringify(this.pokemonArray));
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
