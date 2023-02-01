import { Component, OnInit, Renderer2,} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})



export class PokemonApiComponent implements OnInit {

  constructor(private apiService: ApiService, private renderer: Renderer2) {}

  public pokemonArray: { name: string, image: string }[] = [];

  public onButtonClick(pokemon: { name: string, image: string }, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setInterval(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
  }

 /*  public inputChange(pokemon: { name: string, image: string }, input: HTMLElement ) {
    pokemonImg.className = 'card animate__animated animate__flip';
  } */

  public handleMouseEnter(pokemonImg: HTMLElement){
    pokemonImg.className = 'animate__animated animate__bounce';
  }

  public handleMouseLeave(pokemonImg: HTMLElement){
    pokemonImg.className = '';
  }


ngOnInit() {
  let pokemons = JSON.parse(sessionStorage.getItem("pokemons") || "[]");

  //Won't request data from the api if it's already stored in the sessionStorage
  if (!pokemons.length) {
    console.log("Activated")
    this.apiService.getPokemon().subscribe(
      (response: Pokemon | undefined) => {
        pokemons = response?.results.map((element, index) => {
          let number = JSON.stringify(element.url).split('/')[6];
          let pkmnname = JSON.stringify(element.name).replace(/\"/g, "");
          return {
            name: pkmnname.replace(pkmnname.charAt(0),pkmnname.charAt(0).toUpperCase()),
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"
          };
        });
        sessionStorage.setItem("pokemons", JSON.stringify(pokemons));
        this.pokemonArray = pokemons;
      },
      error => {
        console.error(error);
      }
    );
  }
  else{
    this.pokemonArray = pokemons;
  }
    
  }


}
