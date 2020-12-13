import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nes-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  //@Input() det: Materiel = new Materiel();
  materiels:Materiel[]
  showing:boolean = true; 
  id:string;
  constructor(private materielservice:MaterielService) { }
  onshow()
  {
  this.materielservice.getMaterielById('2');
  }
  ngOnInit(): void {
    
    

  }

}
