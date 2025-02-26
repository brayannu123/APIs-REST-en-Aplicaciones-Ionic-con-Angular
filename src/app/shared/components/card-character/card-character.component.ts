import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
  standalone: false
})
export class CardCharacterComponent implements OnInit {

  @Input() character: any;

  constructor(private route: Router) { }

  ngOnInit() { }

  next() {
    this.route.navigate(["character-detail/", this.character.id]);
  }
}
