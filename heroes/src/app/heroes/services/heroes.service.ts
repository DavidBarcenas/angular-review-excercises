import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/heroes');
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>('http://localhost:3000/heroes/' + id);
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      `http://localhost:3000/heroes?q=${query}&_limit=6`
    );
  }

  createtHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>('http://localhost:3000/heroes/', hero);
  }

  updatetHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>('http://localhost:3000/heroes/' + hero.id, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/heroes/' + id);
  }
}
