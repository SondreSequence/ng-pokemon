import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css'],
})
export class PokemonCataloguePage {
  audioPlayer: HTMLAudioElement;

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = "https://vgmsite.com/soundtracks/pokemon-yellow-blue-red-gb/elbhypyo/50_Pokedex%20Fanfare%201.mp3";
  }

  public setVolume(volume: number) {
    this.audioPlayer.volume = volume;
  }

}


