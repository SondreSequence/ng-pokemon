import { Component, OnInit, Renderer2,} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})



export class PokemonApiComponent implements OnInit {

<<<<<<< HEAD
  constructor(private apiService: ApiService, private caughtPokemonService: CaughtPokemonService) {}
=======
  constructor(private apiService: ApiService) {}
>>>>>>> SondreBranch

  public pokemonArray: Pokemon[] = [];

  public onButtonClick(pokemon: Pokemon, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setInterval(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
    
    this.caughtPokemonService.addToCaughtPokemon(pokemon)

<<<<<<< HEAD
  }

 public inputChange(pokemon: Pokemon, input: HTMLElement ) {
=======
  public onButtonClick(pokemon: { name: string, image: string }, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setInterval(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
  }

 public inputChange(pokemon: { name: string, image: string }, input: HTMLElement ) {
>>>>>>> SondreBranch
    input.className = '';
    setInterval(() => {
      input.className = "form-text anim-typewriter";
    }, 2);
<<<<<<< HEAD
    input.innerHTML = "You caught " + pokemon.results[0].name + "!";
  } 


=======
    input.innerHTML = "You caught " + pokemon.name + "!";
  } 

>>>>>>> SondreBranch
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
<<<<<<< HEAD
     this.pokemonArray = pokemons;
     
     this.apiService.getPokemon().subscribe(
=======
     this.pokemonArray = pokemons;this.apiService.getPokemon().subscribe(
>>>>>>> SondreBranch
      (response: Pokemon | undefined) => {
        pokemons = response?.results.map((element, index) => {
          let number = JSON.stringify(element.url).split('/')[6];
          let pkmnname = JSON.stringify(element.name).replace(/\"/g, "");
          return {
            name: pkmnname.replace(pkmnname.charAt(0),pkmnname.charAt(0).toUpperCase()),
<<<<<<< HEAD
            url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"
=======
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"
>>>>>>> SondreBranch
        };

        });
        sessionStorage.setItem("pokemons", JSON.stringify(pokemons));
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