import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {

    this.gameService.getNominados().subscribe( resp => { // resp son los juegos
      console.log(resp);
      this.juegos = resp;
    } );
  }

  votarJuego( juego: Game ){

    this.gameService.votarJuego( juego.id ).subscribe( (resp: {ok: boolean, mensaje: string}) => {

      if( resp.ok ){
        Swal.fire({
          title: 'Successful vote',
          text: resp.mensaje,
          icon: 'success',
          confirmButtonText: 'gg & exit'
        })
      } else {

        Swal.fire({
          title: 'Vote Unsuccessful',
          text: resp.mensaje,
          icon: 'error',
          confirmButtonText: 'gg & exit'
        })
      }

      console.log(resp);
    } );
  }

}
