import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'nes-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() com: Commentaire = new Commentaire();
  constructor() { }

  ngOnInit(): void {
  }

}
