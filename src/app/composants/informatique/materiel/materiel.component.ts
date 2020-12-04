import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'nes-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input() mat: Materiel = new Materiel();
  showing:boolean = true;
   @Input() com: Commentaire[] 
  constructor() { }
  onshow()
  {
    this.showing = !this.showing; 
  }
  ngOnInit(): void {
  }

}
