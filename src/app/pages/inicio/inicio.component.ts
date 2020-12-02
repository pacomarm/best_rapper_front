import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  raperos: any[] = [];
  
  constructor( private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
    .pipe( 
      map( (resp: Game[]) => resp.map( ({name, votos}) => ({name, value: votos}) ) )
    )
    .subscribe( raperos => {
      
      // console.log(raperos);
      this.raperos = raperos;
    });
  }

}
