import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl: string = 'http://localhost:8080/api/hero';
  
  constructor(
    private messagesService: MessagesService,
    private http: HttpClient,
  ) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url, );
  }

}
