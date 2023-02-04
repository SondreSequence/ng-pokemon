import { Component, OnInit, Renderer2,} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { APIResponse } from 'src/app/models/apiResponse.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CaughtPokemonService } from 'src/app/services/caught-pokemon.service';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})

export class PokemonApiComponent implements OnInit {
  constructor(private apiService: ApiService, private caughtPokemonService: CaughtPokemonService) {}
  
  public pokemonArray: Pokemon[] = [];

  public onButtonClick(pokemon : Pokemon, pokemonImg : HTMLImageElement, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';

    setTimeout(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);

    if(Math.floor((Math.random() * 4) + 1)==1&&pokemon.name!="Rick Astely"){
      pokemonImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+pokemon.id+".png";
      pokemonImg.className="animate__animated animate__wobble";
      pokemon.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+pokemon.id+".png";
      setTimeout(() => {
        cardElement.className = "shiny";
      }, 801);
    }

    this.caughtPokemonService.addToCaughtPokemon(pokemon);
    console.log("CaptureID: " + pokemon.captureID)


  }

  public rickAstely(cardContainer: HTMLDivElement, pokeball: HTMLElement, input: HTMLElement){
    let rick = {name: "Rick Astely", image: "assets/rick.png", id: 0, captureID: 0}

    this.pokemonArray.unshift(rick);
    pokeball.className = "pokeball animate__animated animate__rollOut"
    input.className = '';
    
    let firstLi : HTMLLIElement | null = null; //First element in the list
    setTimeout(() => {
      input.className = "form-text anim-typewriter";
      input.innerHTML = "Never gonna give you up!";
      
      firstLi = cardContainer.querySelector('li');
      if (firstLi) {
        const firstImage = firstLi.querySelector("img");
        if (firstImage && firstImage.style) {
          
          }
        firstLi.className = "card animate__animated animate__bounceInDown";
      }
    }, 3);
    setTimeout(() => { firstLi = cardContainer.querySelector('li'); if (firstLi) firstLi.className = "card animate__animated animate__swing animate__infinite";},1000)
  }

 public inputChange(pokemon: Pokemon, input: HTMLElement ) {
    input.className = '';
    setTimeout(() => {
      input.className = "form-text anim-typewriter";
    }, 1);
    input.innerHTML = "You caught " + pokemon.name + "!";
  } 

  public handleMouseEnter(pokemonImg: HTMLElement){
      pokemonImg.className = 'animate__animated animate__bounce';
    setTimeout(() => {
      pokemonImg.className = '';
    }, 1000);
  }


ngOnInit() {
  let pokemons = JSON.parse(sessionStorage.getItem("pokemons") || "[]");

  //Won't request data from the api if it's already stored in the sessionStorage
  if (this.pokemonArray.length<=0) {
    this.apiService.getPokemon().subscribe(
      (response: APIResponse) => {
      this.pokemonArray = response.results.map((element, index) => {
      let number = element.url.split('/')[6];
      let pkmnname = element.name;
      return {
      name: pkmnname.charAt(0).toUpperCase() + pkmnname.slice(1),
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png",
      id: parseInt(number),
      captureID: 0};
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