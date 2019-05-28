import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    // route snapshot es una imagen de la informacion de ruta poco despues de que el componente fue creado.
    // paramMap es un diccionario de valores de parametros de ruta extraido de la URL. La clave id devuelve la id del hero a buscar.
    // el operador + convierte la cadena en un numero.
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }

}
