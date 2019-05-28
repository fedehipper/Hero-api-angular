import { Component, OnInit, Inject} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heros: Hero[];

  constructor(private heroService: HeroService) {}

  getHeros(): void {
    this.heroService
      .getHeros()
      .subscribe(respuestaHeros => this.heros = respuestaHeros);
  }

  ngOnInit() {
    this.getHeros();
  }

}
