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

  public onButtonClick(pokemon: Pokemon, pokemonImg: HTMLElement, cardElement: HTMLElement ) {
    
    if(pokemon.image.includes("shiny")){
      this.caughtPokemonArray.splice(pokemon.captureID, 1);
 }
    else{
    cardElement.className += ' minimize';

    setTimeout(() => {
      this.caughtPokemonService.removeFromCaughtPokemon(pokemon)
      this.caughtPokemonArray.splice(pokemon.captureID, 1);
    for(let i = 0; i<this.caughtPokemonArray.length; i++)
    {
      this.caughtPokemonArray[i].captureID = i;
    }
    }, 1000);
  }

    
  }

  public inputChange(pokemon: Pokemon, input: HTMLElement ) {
    input.className = '';
    setTimeout(() => {
      input.className = "form-text anim-typewriter";
    }, 1);
    input.innerHTML = "You caught " + pokemon.name + "!";
  } 


  public handleMouseEnter(pokemonImg: HTMLElement){
      pokemonImg.className = 'animate__animated animate__wobble';
    setTimeout(() => {
      pokemonImg.className = '';
    }, 1000);
  }

  public shinyCheck(pokemon: Pokemon, cardElement: HTMLElement){
    if(pokemon.image.includes("shiny"))
    cardElement.className = "shiny";
  }
  


  ngOnInit() {
    this.caughtPokemonArray = JSON.parse(sessionStorage.getItem("captured-pokemon") || "[]");
  }
}

