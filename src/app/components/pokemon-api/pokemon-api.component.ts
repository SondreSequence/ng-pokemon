import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.css']
})
export class PokemonApiComponent implements OnInit {


  constructor(private apiService: ApiService) {
  }

  public pokemonArray: { name: string, image: string }[] = [];

ngOnInit() {
    this.apiService.getPokemon().subscribe(
      (response: Pokemon | undefined) => {
        const pokemons = response?.results.map((element, index) => {
          let number = JSON.stringify(element.url).split('/')[6];
          let pkmnname = JSON.stringify(element.name).replace(/\"/g, "");
          return {
            name: pkmnname.replace(pkmnname.charAt(0),pkmnname.charAt(0).toUpperCase()),
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"
          };
        });
        this.pokemonArray = pokemons || [];
      },
      error => {
        console.error(error);
      }
    );
    
  }


}
