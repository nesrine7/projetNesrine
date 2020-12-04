import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'nes-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  @Input() det: Materiel = new Materiel();
  showing:boolean = true; 
  constructor() { }
  onshow()
  {
    this.showing = !this.showing;
  }
  ngOnInit(): void {
  }

}
