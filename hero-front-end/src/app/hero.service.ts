import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeros(): Observable<Hero[]> {
    // TODO: envia mensajes despues de buscar a los heroes
    this.messagesService.add("HeroService: heroes encontrados");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messagesService.add(`HeroService: obtiene hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
