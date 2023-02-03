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

  public onButtonClick(pokemon: Pokemon, cardElement: HTMLElement, pokeball: HTMLElement ) {
    cardElement.className = 'card animate__animated animate__flip';
    setTimeout(() => {
      cardElement.className = 'caught';
      pokeball.style.display = 'block';
    }, 800);
    console.log(pokemon.captureID)

    this.caughtPokemonService.removeFromCaughtPokemon(pokemon)
    this.caughtPokemonArray.splice(pokemon.captureID, 1);
    for(let i = 0; i<this.caughtPokemonArray.length; i++)
    {
      this.caughtPokemonArray[i].captureID = i;
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
      pokemonImg.className = 'animate__animated animate__bounce';
    setTimeout(() => {
      pokemonImg.className = '';
    }, 1000);
  }


  ngOnInit() {
    this.caughtPokemonArray = JSON.parse(sessionStorage.getItem("captured-pokemon") || "[]");
  }
}

