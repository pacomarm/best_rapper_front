import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados(){

    if( this.juegos.length > 0 ){ 

      console.log('Desde cache');
      return of(this.juegos);

    } else {
      console.log('desde internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`).pipe( tap( resp =>{
        this.juegos = resp;
      }));
    }

  }

  votarJuego( id: string ){

    return this.http.post(`${ environment.url }/api/goty/${id}`, {})
      .pipe(
        catchError( err => {
          return of( err.error );
        })
      );
  }

}
